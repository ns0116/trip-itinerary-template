// Checklist persistence: localStorage (default) or a restApi endpoint.
// restApi falls back to localStorage automatically when the network/API is
// unavailable, so the checklist always works even without a backend.
export function createChecklistStore(config) {
  const cfg = Object.assign(
    { kind: "localStorage", key: "tripChecklist" },
    config.storage || {}
  );
  let saveController = null;

  function readLocal(fallback) {
    try {
      const raw = localStorage.getItem(cfg.key);
      if (raw) return JSON.parse(raw);
    } catch (e) {
      /* corrupted localStorage value, fall through to default */
    }
    return JSON.parse(JSON.stringify(fallback));
  }

  function writeLocal(data) {
    localStorage.setItem(cfg.key, JSON.stringify(data));
  }

  async function load(initial) {
    if (cfg.kind === "restApi") {
      try {
        const res = await fetch(cfg.endpoint);
        if (!res.ok) throw new Error("checklist fetch failed");
        return await res.json();
      } catch (e) {
        return readLocal(initial);
      }
    }
    return readLocal(initial);
  }

  async function save(data) {
    if (cfg.kind !== "restApi") {
      writeLocal(data);
      return { ok: true, synced: false };
    }

    if (saveController) saveController.abort();
    saveController = new AbortController();

    try {
      const res = await fetch(cfg.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        signal: saveController.signal,
      });
      if (!res.ok) throw new Error("checklist save failed");
      return { ok: true, synced: true };
    } catch (e) {
      if (e.name === "AbortError") return { ok: true, synced: false, aborted: true };
      writeLocal(data);
      return { ok: false, synced: false };
    }
  }

  return { load, save };
}
