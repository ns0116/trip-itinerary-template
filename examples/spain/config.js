// Demo config — everything here is invented. City names, museum names,
// restaurant names, artwork titles: all fictional homages, not real places.
// Do not use this as a real travel guide. See docs/DEPLOYMENT.md's scrub checklist.
// Showcases: Iberia design set (default) + checklist (localStorage).

const badge = (text, tone) => ({ text, tone });

export default {
  design: "iberia",

  features: { weatherModes: false, checklist: true, candidates: false },

  storage: { kind: "localStorage", key: "tripChecklist" },

  meta: {
    title: "マドリガル & バルセラータ（デモ・架空の旅程）",
    period: "Mar 10 — Mar 15  5泊6日",
    lang: "ja",
  },

  hotels: [
    { night: "Mar 10 - 12", name: "オテル・プラサ・ドラーダ (MDG)", mapQuery: "マドリガル 旧市街" },
    { night: "Mar 12 - 15", name: "オテル・ボルン・バルセラータ (BCT)", mapQuery: "バルセラータ 旧港区" },
  ],

  flights: [
    { label: "Mar 09 往路", route: "NKJ 16:10 → NTN 19:30", detail: "乗継便（架空）" },
    { label: "Mar 10 往路", route: "NTN 00:45 → MDG 09:15", detail: "乗継便（架空）" },
    { label: "Mar 12 国内線", route: "MDG 11:25 → BCT 12:45", detail: "ZZ411（架空の便）" },
    { label: "Mar 15 復路", route: "BCT 13:00 → NTN 07:00+1", detail: "ZZ318（架空の便）" },
    { label: "Mar 16 復路", route: "NTN 10:10 → NKJ 15:05", detail: "乗継便（架空）" },
  ],

  notes: [
    { icon: "info", text: "都市名・フライト時刻・ホテル名はすべて架空のデモ用データです。" },
    { icon: "clipboard-check", text: "事前予約チェックリストはlocalStorageに保存されます（サーバー不要）。" },
  ],

  tabs: [
    { id: "day1", date: "Mar 10", dayOfWeek: "Tue" },
    { id: "day2", date: "Mar 11", dayOfWeek: "Wed" },
    { id: "day3", date: "Mar 12", dayOfWeek: "Thu" },
    { id: "day4", date: "Mar 13", dayOfWeek: "Fri" },
    { id: "day5", date: "Mar 14", dayOfWeek: "Sat" },
    { id: "day6", date: "Mar 15", dayOfWeek: "Sun" },
  ],

  days: [
    {
      id: "day1",
      title: "マドリガル到着 — 魅惑の夜と幻のフラメンコ",
      events: [
        { time: "09:15", title: "マドリガル到着 (T4)", type: "transport", desc: "架空の「バラス空港」T4ターミナル着（ZZ315便・架空）。国際線のため、入国審査と手荷物受取で約1時間を見込みます。", tip: "到着ロビーは混み合うことがあります。送迎ドライバーとの合流場所を事前に確認しておくとスムーズです。", map: "バラス空港 T4" },
        { time: "11:00", title: "ホテル到着・荷物預け", type: "hotel", desc: "専用車で約30〜40分、立地抜群のオテル・プラサ・ドラーダへ。早朝のためチェックイン前になる場合も。フロントへ荷物を預け身軽になります。", tip: "ホテルの立地の良さは、旅全体を通じた体力温存に直結します。周辺のカフェで軽く一息つくのも◎。", map: "マドリガル 旧市街", badges: [badge("Reserved", "reserved")] },
        { time: "12:00", title: "【候補】サン・ミラグロ市場", type: "food", desc: "王宮〜旧市街間に位置する架空の市場。ショーケースに並ぶ色鮮やかなピンチョス風の一皿を指差し注文でき、少しずつ色々つまむ市場巡りのスタートに最適です。王宮入場前の軽いランチにちょうどよい距離感です。", tip: "観光客向けで価格は少し高めですが、視覚的な楽しさと手軽さは到着日のランチにぴったりです。食後は広場へ向かいチケットを引き換えます。", map: "サン・ミラグロ市場 マドリガル" },
        { time: "13:00", title: "王宮ミラグア（架空の王宮）", type: "sight", desc: "「大陸最大級」と自称する規模の架空の王宮。豪華な謁見の間や武具の間は必見（設定）。オーディオガイド付き、スキップザラインチケットを確保済み。終了後は広場を通り抜けて美術館へ向かいます。", tip: "⚠️ 入場前に必ず窓口でバウチャーをチケットに引き換えること。13時入場に間に合うよう12:45頃には現地到着を目指して。広場→王宮正門は徒歩約7分。", map: "王宮ミラグア マドリガル", badges: [badge("Reserved", "reserved")] },
        { time: "15:00", title: "プラサ・ドラーダと陶磁器店巡り", type: "shop", desc: "王宮見学後、徒歩約10分でプラサ・ドラーダへ。荘厳な広場を散策しつつ、周辺の老舗陶磁器店へ立ち寄ります。創業を名乗る「アンティグア・カサ・セラミカ」は手描きの陶器が揃う架空の名店で、広場のすぐ近くです。", tip: "広場周辺の路地裏に陶器・革製品の老舗（という設定の店）が点在しています。お気に入りを見つけたら思い切って購入するのがおすすめ。", map: "アンティグア・カサ・セラミカ マドリガル", badges: [badge("Hidden gem", "hiddenGem")] },
        { time: "18:00", title: "ホテルで小休憩", type: "hotel", desc: "機内泊後のこの休憩を省くと、夜に睡魔に負けます。マドリガルの夜は遅い——本番はここからです。", map: "マドリガル 旧市街" },
        { time: "19:30", title: "【候補】Viva Madrigal で乾杯", type: "night", desc: "美しい陶器タイルが目を引く架空の老舗バル。フルーティーなサングリア風の一杯や、赤ワインのソーダ割りでマドリガルの夜に乾杯しましょう。", tip: "度数はワインと同じです。より軽く楽しみたい時や、アルコールを少し抑えたい気分の方には、爽やかなソーダ割りがおすすめです。", map: "Viva Madrigal", badges: [badge("Hidden gem", "hiddenGem")] },
        { time: "20:30", title: "【候補】Cardamono または Tablao 1913", type: "music", desc: "本格派の「Cardamono」か、装飾が美しい老舗「Tablao 1913」。どちらも架空のタブラオで、迫力のフラメンコ風ショーを鑑賞します。", tip: "どちらも旧市街の広場周辺にあり、甲乙つけがたい架空の名店です。事前の予約をお忘れなく！", map: "旧市街 広場 マドリガル", badges: [badge("Required", "required")] },
        { time: "22:00", title: "【様子見】Cervecería Bávara", type: "food", desc: "文豪も通ったという設定の老舗バル。鉄板焼きと生ハム風の一皿は絶品。少しずつ頼んでシェアするスタイルがぴったりです。", tip: "フラメンコ終了後の体力次第で。無理せずホテルへ戻るのもありです。", map: "Cerveceria Bavara マドリガル", badges: [badge("Optional", "optional")] },
      ],
    },
    {
      id: "day2",
      title: "マドリガル散策 — 幻の名画の余韻とローカルバル",
      events: [
        { time: "08:30", title: "ホテルにて朝食", type: "hotel", desc: "ホテルで朝食をしっかりとり、1日のエネルギーをチャージ。芸術センターの開館は10時なので、焦らなくてよい朝です。", map: "マドリガル 旧市街" },
        { time: "09:30", title: "プラサ・セントラルの朝", type: "nature", desc: "観光客が少ない午前9時台は、地元の人々が通勤する日常の空気を味わえる貴重な時間。広場中央の像で記念撮影を。", map: "プラサ・セントラル マドリガル" },
        { time: "10:00", title: "レイナ・ルナ芸術センター", type: "art", desc: "架空の巨匠が描いたとされる傑作『嘆きの村』の部屋へ直行。縦3.5m×横7.7mの巨大な反戦画は、写真では絶対に伝わらない圧力があります（設定）。", tip: "開館直後の午前10時は比較的空いています。『嘆きの村』のある棟2階に直行し、周辺の関連作品も合わせてじっくり見るのがおすすめです。", map: "レイナ・ルナ芸術センター マドリガル", badges: [badge("Reserved", "reserved")] },
        { time: "12:00", title: "【候補】Bar El Diamante", type: "food", desc: "駅周辺の架空のバル。地元民に混じって名物という設定の「イカリング風サンド」をサクッと楽しみます。芸術センター鑑賞後の軽めのランチに最適です。", map: "Bar El Diamante マドリガル" },
        { time: "13:30", title: "【選択】ムセオ・ドラード or パルケ・デル・ソル", type: "nature", desc: "天気・気分に合わせて選択。☀️ 晴れならパルケ・デル・ソルへ——ガラス宮や池のボート、緑豊かな散策が楽しめます。🌧️ 曇り・雨ならムセオ・ドラードへ——架空の巨匠による『鏡の宮廷』など必見作品を絞って鑑賞。どちらも芸術センターから徒歩5〜10分圏内です（設定）。", tip: "パルケ・デル・ソルのガラス宮では現代アートの企画展が開催されることも。ムセオ・ドラードは入場前予約推奨（閉館20:00まで余裕あり）。", map: "パルケ・デル・ソル マドリガル", badges: [badge("Optional", "optional")] },
        { time: "16:00", title: "グランビア・ドラーダ散策＆La Marquesita", type: "shop", desc: "「大陸のブロードウェイ」を自称するグランビア・ドラーダ通りを建築散歩。老舗菓子店「La Marquesita」では極上の焼き菓子と紅茶で優雅な休憩を。ブランドのウィンドウショッピングも楽しめます。美術館エリアからタクシーで約15分。", map: "La Marquesita マドリガル", badges: [badge("Hidden gem", "hiddenGem")] },
        { time: "18:00", title: "ホテルで小休憩", type: "hotel", desc: "1日の観光を終えてホテルへ戻りひと息。市場でのディナーに向けてリフレッシュします。", map: "マドリガル 旧市街" },
        { time: "20:00", title: "【候補】Mercado de San Anselmo", type: "food", desc: "モダンな室内市場（架空）。1Fで生ハムやチーズ風の品を購入し、2Fのフードコートで地元民に混じって軽くつまむのがローカルスタイル。", tip: "観光化が進んだ市場とは違い、地元民率が圧倒的に高いという設定です。ワイン専門店も入っており、ローカルな市場巡りの楽しさが詰まっています。", map: "Mercado de San Anselmo マドリガル", badges: [badge("Hidden gem", "hiddenGem")] },
      ],
    },
    {
      id: "day3",
      title: "バルセラータへ — 架空の海風と絶品パエリア風料理",
      events: [
        { time: "07:30", title: "ホテル朝食・チェックアウト", type: "hotel", desc: "ホテルで朝食を済ませてチェックアウト。08:30頃にはタクシー（または送迎アプリ）でバラス空港T4へ向かいます。", tip: "前日夜のうちにスーツケースの大まかな整理を済ませておくと朝がスムーズです。", map: "マドリガル 旧市街" },
        { time: "09:30", title: "マドリガルT4 チェックイン", type: "transport", desc: "ZZ411便（架空）のチェックインと手荷物預け。国内線扱いですが、手荷物預けカウンターが混雑する場合があるため余裕を持った到着が安心です。", map: "バラス空港 T4" },
        { time: "11:25", title: "マドリガル発（ZZ411）", type: "transport", desc: "バラス空港T4から空路でバルセラータへ移動。飛行時間は約1時間10分（架空）。", map: "バラス空港 T4" },
        { time: "12:45", title: "バルセラータ到着 (T1)", type: "transport", desc: "架空の「コスタ空港」着。国内線扱いのため入国審査は不要です。手荷物受取（約30分）を済ませ、確保済みの送迎車と合流します。", tip: "マドリガルからの国内移動なので到着後の手続きはスムーズです。到着ロビーでドライバーと合流しましょう。", map: "コスタ空港 T1", badges: [badge("Reserved", "reserved")] },
        { time: "14:00", title: "ホテル到着・荷物預け", type: "hotel", desc: "空港から市内まで専用車で約30〜40分。旧港区の中心オテル・ボルン・バルセラータへ到着。荷物を預けて身軽にランチへ！", map: "オテル・ボルン・バルセラータ" },
        { time: "14:45", title: "【候補】9 Puertas", type: "food", desc: "創業を名乗る架空の超老舗。名物という設定の「パエリア風炊き込みご飯」や「フィデウア風パスタ」をクラシックな空間で味わえます。", tip: "ホテルから徒歩またはタクシーですぐ。通し営業なので遅めのランチにも最適ですが、確実に入るなら予約を推奨します。", map: "9 Puertas バルセラータ", badges: [badge("Required", "required")] },
        { time: "16:45", title: "バリオ・アンティグオ散策", type: "sight", desc: "食後はホテル周辺のバリオ・アンティグオ（旧市街）をのんびり散策。荘厳なカテドラル（大聖堂）や、中世の面影を残す「王の広場」など、架空の迷宮に迷い込みます。", map: "バリオ・アンティグオ バルセラータ" },
        { time: "17:30", title: "ムセオ・マリソル", type: "art", desc: "旧港区の中世の建物を繋いだ架空の美術館。若き日の習作から晩年まで時系列で追える構成です（架空の画家マリソルの回顧展）。バリオ・アンティグオから徒歩10〜15分。", tip: "『鏡の宮廷』連作はマドリガルの美術館の翌日に見ると比較が効いて面白いです。見学は約1.5時間を目安に。", map: "ムセオ・マリソル バルセラータ", badges: [badge("Reserved", "reserved")] },
        { time: "19:00", title: "旧港区でワイン＆雑貨探し", type: "shop", desc: "ムセオ・マリソル周辺はお洒落なショップの宝庫。美しい陶磁器や、老舗ワインショップ（Vinos del Puerto等）での上質なワイン選びが楽しめます。", tip: "このエリアには地元発のオーガニックコスメ店や、パッケージが可愛いチョコレート店も点在しており、路地裏の散策にぴったりです。", map: "旧港区 バルセラータ" },
        { time: "20:30", title: "【候補】旧港区のバルへ", type: "night", desc: "買い物の後はそのまま旧港区の路地へ。人気店「El Brindis」等で名物のタパス風の一皿をつまみつつ、夜の街歩きを楽しみます。", tip: "ここの自家製スパークリングは甘口で飲みやすいですが、アルコール度数はしっかりあります。お酒を控えたい場合はフレッシュオレンジジュース等もとても美味しいです。", map: "El Brindis バルセラータ", badges: [badge("Hidden gem", "hiddenGem")] },
      ],
    },
    {
      id: "day4",
      title: "幻の建築巡りと海辺の夕暮れ",
      events: [
        { time: "08:00", title: "ホテルにて朝食", type: "hotel", desc: "この日は移動が多め。ホテルでしっかり食べて体力を整え、ツアーの集合時間に合わせて出発します。", map: "オテル・ボルン・バルセラータ" },
        { time: "09:00", title: "テンプロ・イマジナリオ", type: "sight", desc: "確保済みのツアーに参加。正面側から入ると、朝の太陽光が内部のステンドグラスを通して「光の大聖堂」体験ができます（架空の建築）。", tip: "午前の光（東側）は青・緑が輝き幻想的。ガイドの解説を聞きながら架空の巨匠建築家による最高傑作の細部を堪能してください。", map: "テンプロ・イマジナリオ バルセラータ", badges: [badge("Reserved", "reserved")] },
        { time: "12:30", title: "周辺で軽めのランチ", type: "food", desc: "テンプロ・イマジナリオ周辺のカフェやバルでサクッとランチを済ませ、タクシーで夢見公園へ向かいます。", map: "テンプロ・イマジナリオ バルセラータ" },
        { time: "14:00", title: "パルケ・エンスエーニョ（夢見公園）", type: "nature", desc: "予約時間に入場。大テラス（モザイクのベンチ）は必見。奇想天外な架空建築と自然の調和を散策します。", map: "パルケ・エンスエーニョ バルセラータ", badges: [badge("Reserved", "reserved")] },
        { time: "16:00", title: "プラヤ・ドラーダ（海岸）へ", type: "nature", desc: "山の上の夢見公園からタクシーで一気に海側へ！開放的なビーチ沿いは歩いているだけで楽しめます。", tip: "実はDay3のランチ後にも寄りますが、夕暮れ時の架空の海はまた別格の雰囲気です。海風に吹かれながら建築巡りの疲れを癒やしましょう。", map: "プラヤ・ドラーダ バルセラータ" },
        { time: "18:00", title: "【候補】Chiringuito Estrella", type: "food", desc: "海岸沿いにある大人気の架空のシーフードレストランなどで早めのディナー。", tip: "海沿いの観光客向け大型店は混雑期でも営業している確率が高く、ディナー難民になるのを防ぐ選択肢です（念のため事前予約を推奨します）。", map: "Chiringuito Estrella バルセラータ", badges: [badge("Recommended", "recommended")] },
        { time: "20:30", title: "バリオ・アンティグオの夜散歩", type: "night", desc: "ホテルへの帰り道、プラサ・デル・シレンシオなど旧市街の静かな路地裏を散策。落ち着いた雰囲気を味わいます。", map: "プラサ・デル・シレンシオ バルセラータ", badges: [badge("Hidden gem", "hiddenGem")] },
      ],
    },
    {
      id: "day5",
      title: "幻の建築巡り② — パセオ・ドラードと活気ある市場",
      events: [
        { time: "07:30", title: "ホテルにて朝食", type: "hotel", desc: "カサ・マリポサの入場が8:30のため少し早め。ホテルで朝食を済ませてからタクシー等で向かいます。", map: "オテル・ボルン・バルセラータ" },
        { time: "08:30", title: "カサ・マリポサ（蝶の家）", type: "sight", desc: "「海と骨と竜の鱗」をモチーフにしたという設定のタイルは、直射日光が当たる午前中に最も輝きます。朝一の入場が快適に見学する最大のコツ。", map: "カサ・マリポサ バルセラータ", badges: [badge("Reserved", "reserved")] },
        { time: "11:00", title: "パセオ・ドラード観光＆散策", type: "shop", desc: "ブランドの路面店や、六角形のタイルを探しながら散策します（設定上の名物）。", map: "パセオ・ドラード バルセラータ" },
        { time: "11:30", title: "【候補】El Internacional", type: "food", desc: "パセオ・ドラード沿いにある、古い駐車場を改装した壮大なフードコート（架空）。カサ・マリポサ見学後のランチに最適。ウェイターができたてのタパス風料理を運んでくる活気あるスタイルです。", map: "El Internacional バルセラータ" },
        { time: "13:00", title: "カサ・オラ（波の家）", type: "sight", desc: "パセオ・ドラードにあるもう一つの架空建築。波打つファサードと、屋上に並ぶ奇妙な煙突群を見学します。ランチ後すぐ近くなのでそのまま向かえます。", map: "カサ・オラ バルセラータ", badges: [badge("Reserved", "reserved")] },
        { time: "15:00", title: "メルカード・デ・ラ・ルナ＆ランブラ・イマジナリア", type: "nature", desc: "架空の最大の市場へ！色鮮やかなフルーツジュースや生ハム風の食べ歩きが楽しめます。カサ・オラからタクシーで約10分。", tip: "土曜の午後は活気がありつつも夕方ほど混雑しない狙い目の時間帯です。スリには十分にご注意ください。", map: "メルカード・デ・ラ・ルナ バルセラータ" },
        { time: "17:00", title: "ホテル周辺（バリオ・アンティグオ）散策", type: "night", desc: "ホテル周辺の旧市街を散策します。入り組んだ路地や歴史的な建造物が並ぶエリアです。ランブラ・イマジナリアからそのまま歩いて戻れます。", map: "バリオ・アンティグオ バルセラータ" },
        { time: "19:30", title: "【候補】Vinitos または La Repita", type: "food", desc: "魚介タパス風料理が豊富な「Vinitos」、またはモダンタパスの「La Repita」など、パセオ・ドラード周辺の人気店（架空）でディナー。", map: "Vinitos バルセラータ" },
      ],
    },
    {
      id: "day6",
      title: "帰国日 — 名残惜しい朝と架空の海の記憶",
      events: [
        { time: "07:30", title: "ホテルにて最後の朝食", type: "hotel", desc: "帰国便が13:00発のため、空港には10:00頃に到着するのが安全です。少し早起きしてバルセラータでの最後の朝食を味わいます。", map: "オテル・ボルン・バルセラータ" },
        { time: "08:30", title: "カテドラル周辺・バリオ・アンティグオ散策", type: "sight", desc: "日曜は市場が休業のため、静かな朝のバリオ・アンティグオを散策。重厚なカテドラル（大聖堂）の荘厳な外観や、中世の面影を残す石畳の路地で最後の記念撮影を。", tip: "もし小腹が空いていたら、近くの老舗で名物の揚げ菓子＆チョコラテ風ドリンクを立ち食いするのも素晴らしい思い出になります。", map: "カテドラル バルセラータ" },
        { time: "09:30", title: "チェックアウト・空港へ", type: "transport", desc: "名残惜しいですが、ホテルをチェックアウト。タクシー等でコスタ空港へ向かいます。", tip: "市内から空港までは約30〜40分。国際線の出発＆免税手続きがあるため早めに動きます。", map: "オテル・ボルン・バルセラータ" },
        { time: "10:15", title: "バルセラータT1 到着・手続き", type: "transport", desc: "コスタ空港T1ターミナルでチェックイン。免税手続き（Tax Free）もここで済ませます。", tip: "免税申請はチェックイン前（荷物を預ける前）に保安検査手前で行うのが一般的です。混雑することが多いので時間に余裕を持ちましょう。", map: "コスタ空港 T1" },
        { time: "13:00", title: "バルセラータ発（ZZ318）", type: "transport", desc: "バルセラータ発、架空の中継地「南天空港」経由で帰国の途へ。お疲れ様でした！", map: "コスタ空港" },
      ],
    },
  ],

  checklist: [
    { id: "transfer", title: "空港送迎（MDG / BCT）", desc: "確保済み", isDone: true, type: "done" },
    { id: "sagrada", title: "テンプロ・イマジナリオ", desc: "確保済み・当日バウチャーを提示", isDone: true, type: "done" },
    { id: "guell", title: "パルケ・エンスエーニョ", desc: "確保済み（14:00入場枠）", isDone: true, type: "done" },
    { id: "palace", title: "王宮ミラグア（マドリガル）", desc: "3/10 13:00枠を確保済み（オーディオガイド付き）", isDone: true, type: "done" },
    { id: "flamenco", title: "フラメンコ「Cardamono または Tablao 1913」", desc: "要事前予約（どちらかお好みで）", isDone: false, type: "required" },
    { id: "prado", title: "ムセオ・ドラード", desc: "3/11 午後に行く場合は予約推奨", isDone: false, type: "recommended" },
    { id: "reinasofia", title: "レイナ・ルナ芸術センター", desc: "3/11 10:00枠を確保済み", isDone: true, type: "done" },
    { id: "9puertas", title: "老舗レストラン「9 Puertas」", desc: "要予約（名物パエリア風料理・通し営業）", isDone: false, type: "required" },
    { id: "marisol", title: "ムセオ・マリソル", desc: "3/12 17:30枠を確保済み", isDone: true, type: "done" },
    { id: "estrella", title: "シーフード「Chiringuito Estrella」", desc: "予約推奨（混雑期のディナー難民対策）", isDone: false, type: "recommended" },
    { id: "mariposa", title: "カサ・マリポサ", desc: "3/14 8:30枠を確保済み", isDone: true, type: "done" },
    { id: "ola", title: "カサ・オラ", desc: "3/14 13:00枠を確保済み", isDone: true, type: "done" },
  ],
};
