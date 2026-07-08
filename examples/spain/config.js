// Demo config — fictional dates/flight numbers/hotel names (see docs/DEPLOYMENT.md's scrub checklist).
// Real place names (museums, restaurants, landmarks) are public tourism info and kept as-is.
// Showcases: Iberia design set (default) + checklist (localStorage).

const badge = (text, tone) => ({ text, tone });

export default {
  design: "iberia",

  features: { weatherModes: false, checklist: true, candidates: false },

  storage: { kind: "localStorage", key: "tripChecklist" },

  meta: {
    title: "Madrid & Barcelona (Demo)",
    period: "Mar 10 — Mar 15  5泊6日",
    lang: "ja",
  },

  hotels: [
    { night: "Mar 10 - 12", name: "Hotel Plaza Mayor Select (MAD)", mapQuery: "Puerta del Sol, Madrid, Spain" },
    { night: "Mar 12 - 15", name: "Hotel Born Barcelona (BCN)", mapQuery: "El Born, Barcelona, Spain" },
  ],

  flights: [
    { label: "Mar 09 往路", route: "NGO 16:10 → HKG 19:30", detail: "乗継便" },
    { label: "Mar 10 往路", route: "HKG 00:45 → MAD 09:15", detail: "乗継便" },
    { label: "Mar 12 国内線", route: "MAD 11:25 → BCN 12:45", detail: "ZZ411" },
    { label: "Mar 15 復路", route: "BCN 13:00 → HKG 07:00+1", detail: "ZZ318" },
    { label: "Mar 16 復路", route: "HKG 10:10 → NGO 15:05", detail: "乗継便" },
  ],

  notes: [
    { icon: "info", text: "フライト時刻・ホテル名はデモ用の仮データです。" },
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
      title: "マドリード到着 — 魅惑の夜とフラメンコ",
      events: [
        { time: "09:15", title: "マドリード到着 (T4)", type: "transport", desc: "バラハス空港T4ターミナル着（ZZ315便）。国際線のため、入国審査と手荷物受取で約1時間を見込みます。", tip: "到着ロビーは混み合うことがあります。送迎ドライバーとの合流場所を事前に確認しておくとスムーズです。", map: "Adolfo Suárez Madrid-Barajas Airport T4, Madrid, Spain" },
        { time: "11:00", title: "ホテル到着・荷物預け", type: "hotel", desc: "専用車で約30〜40分、立地抜群のHotel Plaza Mayor Selectへ。早朝のためチェックイン前になる場合も。フロントへ荷物を預け身軽になります。", tip: "ホテルの立地の良さは、旅全体を通じた体力温存に直結します。周辺のカフェで軽く一息つくのも◎。", map: "Hotel Plaza Mayor Select, Madrid, Spain", badges: [badge("Reserved", "reserved")] },
        { time: "12:00", title: "【候補】サン・ミゲル市場", type: "food", desc: "王宮〜ソル間に位置する市場。ショーケースに並ぶ色鮮やかなピンチョスを指差し注文でき、少しずつ色々つまむ市場巡りのスタートに最適です。王宮入場前の軽いランチにちょうどよい距離感です。", tip: "観光客向けで価格は少し高めですが、視覚的な楽しさと手軽さは到着日のランチにぴったりです。食後はPlaza de Españaへ向かいチケットを引き換えます。", map: "Mercado de San Miguel, Madrid, Spain" },
        { time: "13:00", title: "マドリード王宮（Palacio Real）", type: "sight", desc: "「世界に現存する最大の王室宮殿」と言われる規模。豪華な謁見の間や武器の間は必見。オーディオガイド（英語）付き、スキップザラインチケットを確保済み。終了後はマヨール広場を通り抜けてプラドへ向かいます。", tip: "⚠️ 入場前に必ずNaturanda（Plaza de España, 9）でバウチャーをチケットに引き換えること。13時入場に間に合うよう12:45頃には現地到着を目指して。Plaza de España→王宮正門は徒歩約7分。", map: "Palacio Real de Madrid, Spain", badges: [badge("Reserved", "reserved")] },
        { time: "15:00", title: "マヨール広場と陶磁器店巡り", type: "shop", desc: "王宮見学後、徒歩約10分でマヨール広場へ。荘厳な広場を散策しつつ、周辺の老舗陶磁器店へ立ち寄ります。1904年創業の「Antigua Casa Talavera」（カジェ・イザベル・ラ・カトリカ 2番地）は手描きのタラベラ焼きが揃う名店で、広場のすぐ近くです。", tip: "広場周辺の路地裏に陶器・革製品の老舗が点在しています。お気に入りを見つけたら思い切って購入するのがおすすめ——スペインの陶器は日本で買うと倍以上します。", map: "Antigua Casa Talavera, Madrid, Spain", badges: [badge("Hidden gem", "hiddenGem")] },
        { time: "18:00", title: "ホテルで小休憩", type: "hotel", desc: "機内泊後のこの休憩を省くと、夜に睡魔に負けます。スペインの夜は遅い——本番はここからです。", map: "Hotel Plaza Mayor Select, Madrid, Spain" },
        { time: "19:30", title: "【候補】Viva Madrid で乾杯", type: "night", desc: "1856年創業、美しい陶器タイルが目を引く老舗バル。フルーティーなサングリアや、赤ワインのレモンソーダ割り「ティント・デ・ベラーノ」でマドリードの夜に乾杯しましょう。", tip: "サングリアは飲みやすいですが度数はワインと同じです。より軽く楽しみたい時や、アルコールを少し抑えたい気分の方には、爽やかな「ティント・デ・ベラーノ」がおすすめです。", map: "Viva Madrid, Madrid, Spain", badges: [badge("Hidden gem", "hiddenGem")] },
        { time: "20:30", title: "【候補】Cardamomo または 1911", type: "music", desc: "本格派の「Cardamomo」か、アンダルシア風の美しいタイル装飾が魅力の老舗「Tablao Flamenco 1911」。お好みのタブラオで迫力のフラメンコを鑑賞します。", tip: "どちらもサンタ・アナ広場周辺にあり、甲乙つけがたい名店です。事前の予約をお忘れなく！", map: "Plaza de Santa Ana, Madrid, Spain", badges: [badge("Required", "required")] },
        { time: "22:00", title: "【様子見】Cervecería Alemana", type: "food", desc: "ヘミングウェイも愛した老舗バル。マッシュルームの鉄板焼きとスペイン産生ハムは絶品。少しずつ頼んでシェアするスタイルがぴったりです。", tip: "フラメンコ終了後の体力次第で。無理せずホテルへ戻るのもありです。", map: "Cerveceria Alemana, Madrid, Spain", badges: [badge("Optional", "optional")] },
      ],
    },
    {
      id: "day2",
      title: "マドリード散策 — 名画の余韻とローカルバル",
      events: [
        { time: "08:30", title: "ホテルにて朝食", type: "hotel", desc: "ホテルで朝食をしっかりとり、1日のエネルギーをチャージ。ソフィア王妃の開館は10時なので、焦らなくてよい朝です。", map: "Hotel Plaza Mayor Select, Madrid, Spain" },
        { time: "09:30", title: "プエルタ・デル・ソルの朝", type: "nature", desc: "観光客が少ない午前9時台は、地元の人々が通勤する日常の空気を味わえる貴重な時間。熊とイチゴの木の像で記念撮影を。", map: "Puerta del Sol, Madrid, Spain" },
        { time: "10:00", title: "ソフィア王妃芸術センター", type: "art", desc: "ピカソの傑作『ゲルニカ』の部屋へ直行。縦3.5m×横7.7mの巨大な反戦画は、写真では絶対に伝わらない圧力があります。", tip: "開館直後の午前10時は比較的空いています。ゲルニカのあるサバティーニ棟2階に直行し、周辺の関連作品も合わせてじっくり見るのがおすすめです。", map: "Museo Nacional Centro de Arte Reina Sofia, Madrid, Spain", badges: [badge("Reserved", "reserved")] },
        { time: "12:00", title: "【候補】Bar El Brillante", type: "food", desc: "アトーチャ駅周辺。地元民に混じってマドリード名物「ボカディージョ・デ・カラマレス（イカリングサンド）」をサクッと楽しみます。ソフィア王妃鑑賞後の軽めのランチに最適です。", map: "Bar El Brillante, Madrid, Spain" },
        { time: "13:30", title: "【選択】プラド美術館 or レティーロ公園", type: "nature", desc: "天気・気分に合わせて選択。☀️ 晴れならレティーロ公園へ——クリスタル宮や池のボート、緑豊かな散策が楽しめます。🌧️ 曇り・雨ならプラド美術館へ——ベラスケス「ラス・メニーナス」やゴヤの部屋など必見作品を絞って鑑賞。どちらもソフィア王妃から徒歩5〜10分圏内です。", tip: "レティーロ公園のクリスタル宮（Palacio de Cristal）は現代アートの企画展が開催されることも。プラドは入場前予約推奨（閉館20:00まで余裕あり）。", map: "Parque del Retiro, Madrid, Spain", badges: [badge("Optional", "optional")] },
        { time: "16:00", title: "グランビア散策＆La Duquesita", type: "shop", desc: "「スペインのブロードウェイ」グランビア通りを建築散歩。1914年創業の老舗菓子店「La Duquesita」では極上の焼き菓子と紅茶で優雅な休憩を。スペインブランドのウィンドウショッピングも楽しめます。プラドorレティーロからタクシーで約15分。", map: "La Duquesita, Madrid, Spain", badges: [badge("Hidden gem", "hiddenGem")] },
        { time: "18:00", title: "ホテルで小休憩", type: "hotel", desc: "1日の観光を終えてホテルへ戻りひと息。サンアントン市場でのディナーに向けてリフレッシュします。", map: "Hotel Plaza Mayor Select, Madrid, Spain" },
        { time: "20:00", title: "【候補】サンアントン市場", type: "food", desc: "チュエカ地区のモダンな室内市場。1Fで生ハムやチーズを購入し、2Fのフードコートで地元民に混じって軽くつまむのがローカルスタイル。", tip: "観光化が進んだ市場とは違い、地元民率が圧倒的に高いです。スペインワインの専門店も入っており、ローカルな市場巡りの楽しさが詰まっています。", map: "Mercado de San Anton, Madrid, Spain", badges: [badge("Hidden gem", "hiddenGem")] },
      ],
    },
    {
      id: "day3",
      title: "バルセロナへ — 地中海の風と絶品パエリア",
      events: [
        { time: "07:30", title: "ホテル朝食・チェックアウト", type: "hotel", desc: "ホテルで朝食を済ませてチェックアウト。08:30頃にはタクシー（または送迎アプリ）でバラハス空港T4へ向かいます。", tip: "前日夜のうちにスーツケースの大まかな整理を済ませておくと朝がスムーズです。", map: "Hotel Plaza Mayor Select, Madrid, Spain" },
        { time: "09:30", title: "マドリードT4 チェックイン", type: "transport", desc: "ZZ411便のチェックインと手荷物預け。国内線（シェンゲン協定内）ですが、手荷物預けカウンターが混雑する場合があるため余裕を持った到着が安心です。", map: "Madrid Barajas Airport Terminal 4, Spain" },
        { time: "11:25", title: "マドリード発（ZZ411）", type: "transport", desc: "バラハスT4から空路でバルセロナへ移動。飛行時間は約1時間10分。", map: "Madrid Barajas Airport Terminal 4, Spain" },
        { time: "12:45", title: "バルセロナ到着 (T1)", type: "transport", desc: "エル・プラット空港着。国内線のため入国審査は不要です。手荷物受取（約30分）を済ませ、確保済みの送迎車と合流します。", tip: "マドリードからの国内移動なので到着後の手続きはスムーズです。到着ロビーでドライバーと合流しましょう。", map: "Barcelona El Prat Airport Terminal 1, Spain", badges: [badge("Reserved", "reserved")] },
        { time: "14:00", title: "ホテル到着・荷物預け", type: "hotel", desc: "空港から市内まで専用車で約30〜40分。ゴシック地区の中心Hotel Born Barcelonaへ到着。荷物を預けて身軽にランチへ！", map: "Hotel Born Barcelona, Barcelona, Spain" },
        { time: "14:45", title: "【候補】7 Portes (セッテ・ポルタス)", type: "food", desc: "1836年創業、ピカソやミロも通った超老舗。名物の「パエリア」や「フィデウア（パスタのパエリア）」をクラシックな空間で味わえます。", tip: "ホテルから徒歩またはタクシーですぐ。通し営業なので遅めのランチにも最適ですが、確実に入るなら予約を推奨します。", map: "Restaurant 7 Portes, Barcelona, Spain", badges: [badge("Required", "required")] },
        { time: "16:45", title: "ゴシック地区散策", type: "sight", desc: "食後はホテル周辺のゴシック地区（旧市街）をのんびり散策。荘厳なカテドラル（大聖堂）や、コロンブスがイサベル女王に謁見した「王の広場」など、中世の迷宮に迷い込みます。", map: "Barri Gotic, Barcelona, Spain" },
        { time: "17:30", title: "ピカソ美術館", type: "art", desc: "エル・ボルン地区の中世の建物を繋いだ美術館。若き日の習作から晩年まで時系列で追える構成です。ゴシック地区から徒歩10〜15分。", tip: "「ラス・メニーナス」連作はプラドの翌日に見ると比較が効いて面白いです。見学は約1.5時間を目安に。", map: "Museu Picasso de Barcelona, Spain", badges: [badge("Reserved", "reserved")] },
        { time: "19:00", title: "ボルン地区でワイン＆雑貨探し", type: "shop", desc: "ピカソ美術館周辺はお洒落なショップの宝庫。美しいスペイン陶磁器や、老舗ワインショップ（Vila Viniteca等）での上質なワイン選びが楽しめます。", tip: "このエリアには地元発のオーガニックコスメ店や、パッケージが可愛いチョコレート店も点在しており、路地裏の散策にぴったりです。", map: "Passeig del Born, Barcelona, Spain" },
        { time: "20:30", title: "【候補】ボルン地区のバルへ", type: "night", desc: "買い物の後はそのままボルン地区の路地へ。人気店「El Xampanyet」等で名物のタパスをつまみつつ、夜の街歩きを楽しみます。", tip: "ここの自家製カヴァ（スパークリング）は甘口で飲みやすいですが、アルコール度数はしっかりあります。お酒を控えたい場合はフレッシュオレンジジュース等もとても美味しいです。", map: "El Xampanyet, Barcelona, Spain", badges: [badge("Hidden gem", "hiddenGem")] },
      ],
    },
    {
      id: "day4",
      title: "ガウディ建築と地中海の夕暮れ",
      events: [
        { time: "08:00", title: "ホテルにて朝食", type: "hotel", desc: "この日は移動が多め。ホテルでしっかり食べて体力を整え、ツアーの集合時間に合わせて出発します。", map: "Hotel Born Barcelona, Barcelona, Spain" },
        { time: "09:00", title: "サグラダ・ファミリア", type: "sight", desc: "確保済みのツアーに参加。生誕のファサード側から入ると、朝の太陽光が内部のステンドグラスを通して「光の大聖堂」体験ができます。", tip: "午前の光（東側）は青・緑が輝き幻想的。ガイドの解説を聞きながらガウディの最高傑作の細部を堪能してください。", map: "La Sagrada Familia, Barcelona, Spain", badges: [badge("Reserved", "reserved")] },
        { time: "12:30", title: "周辺で軽めのランチ", type: "food", desc: "サグラダ・ファミリア周辺のカフェやバルでサクッとランチを済ませ、タクシーでグエル公園へ向かいます。", map: "La Sagrada Familia, Barcelona, Spain" },
        { time: "14:00", title: "グエル公園", type: "nature", desc: "予約時間に入場。大テラス（モザイクのベンチ）は必見。ガウディのユニークな建築と自然の調和を散策します。", map: "Park Guell, Barcelona, Spain", badges: [badge("Reserved", "reserved")] },
        { time: "16:00", title: "バルセロネータ海岸へ", type: "nature", desc: "山の上のグエル公園からタクシーで一気に海側へ！開放的なビーチ沿いは歩いているだけで楽しめます。", tip: "実はDay3のランチ後にも寄りますが、夕暮れ時の地中海はまた別格の雰囲気です。海風に吹かれながらガウディ疲れを癒やしましょう。", map: "Barceloneta Beach, Barcelona, Spain" },
        { time: "18:00", title: "【候補】Xiringuito Escribà", type: "food", desc: "海岸沿いにある大人気のシーフードレストラン（チリンギート・エスクリバ）などで早めのディナー。", tip: "海沿いの観光客向け大型店は混雑期でも営業している確率が高く、ディナー難民になるのを防ぐ選択肢です（念のため事前予約を推奨します）。", map: "Xiringuito Escriba, Barcelona, Spain", badges: [badge("Recommended", "recommended")] },
        { time: "20:30", title: "ゴシック地区の夜散歩", type: "night", desc: "ホテルへの帰り道、サンフェリペネリ広場など旧市街の静かな路地裏を散策。落ち着いた雰囲気を味わいます。", map: "Placa de Sant Felip Neri, Barcelona, Spain", badges: [badge("Hidden gem", "hiddenGem")] },
      ],
    },
    {
      id: "day5",
      title: "ガウディ建築巡り② — グラシア通りと活気ある市場",
      events: [
        { time: "07:30", title: "ホテルにて朝食", type: "hotel", desc: "カサ・バトリョの入場が8:30のため少し早め。ホテルで朝食を済ませてからタクシー等で向かいます。", map: "Hotel Born Barcelona, Barcelona, Spain" },
        { time: "08:30", title: "カサ・バトリョ", type: "sight", desc: "「海と骨と竜の鱗」をモチーフにしたタイルは、直射日光が当たる午前中に最も輝きます。朝一の入場が快適に見学する最大のコツ。", map: "Casa Batllo, Barcelona, Spain", badges: [badge("Reserved", "reserved")] },
        { time: "11:00", title: "グラシア通り観光＆散策", type: "shop", desc: "スペインブランドの路面店や、ガウディがデザインした六角形のタイルを探しながら散策します。", map: "Passeig de Gracia, Barcelona, Spain" },
        { time: "11:30", title: "【候補】El Nacional", type: "food", desc: "グラシア通り沿いにある、古い駐車場を改装した壮大なフードコート。バトリョ見学後のランチに最適。ウェイターができたてのタパスを運んでくる活気あるスタイルです。", map: "El Nacional, Barcelona, Spain" },
        { time: "13:00", title: "カサ・ミラ", type: "sight", desc: "グラシア通りにあるもう一つのガウディ建築。波打つファサードと、屋上に並ぶ奇妙な煙突群を見学します。ランチ後すぐ近くなのでそのまま向かえます。", map: "Casa Mila, Barcelona, Spain", badges: [badge("Reserved", "reserved")] },
        { time: "15:00", title: "ボケリア市場＆ランブラス通り", type: "nature", desc: "バルセロナ最大の市場へ！色鮮やかなフルーツジュースや生ハムの食べ歩きが楽しめます。カサ・ミラからタクシーで約10分。", tip: "土曜の午後は活気がありつつも夕方ほど混雑しない狙い目の時間帯です。スリには十分にご注意ください。", map: "Mercado de La Boqueria, Barcelona, Spain" },
        { time: "17:00", title: "ホテル周辺（ゴシック地区）散策", type: "night", desc: "ホテル周辺の旧市街を散策します。入り組んだ路地や歴史的な建造物が並ぶエリアです。ランブラス通りからそのまま歩いて戻れます。", map: "Barri Gotic, Barcelona, Spain" },
        { time: "19:30", title: "【候補】Vinitus または La Pepita", type: "food", desc: "魚介タパスが豊富な「Vinitus」、またはモダンタパスの「La Pepita」など、アシャンプラ〜グラシア地区の人気店でディナー。", map: "Vinitus, Barcelona, Spain" },
      ],
    },
    {
      id: "day6",
      title: "帰国日 — 名残惜しい朝と地中海の記憶",
      events: [
        { time: "07:30", title: "ホテルにて最後の朝食", type: "hotel", desc: "帰国便が13:00発のため、空港には10:00頃に到着するのが安全です。少し早起きしてスペインでの最後の朝食を味わいます。", map: "Hotel Born Barcelona, Barcelona, Spain" },
        { time: "08:30", title: "カテドラル周辺・ゴシック地区散策", type: "sight", desc: "日曜は市場が休業のため、静かな朝のゴシック地区を散策。重厚なカテドラル（大聖堂）の荘厳な外観や、中世の面影を残す石畳の路地で最後の記念撮影を。", tip: "もし小腹が空いていたら、近くの老舗でスペイン名物「チュロス＆チョコラテ」を立ち食いするのも素晴らしい思い出になります。", map: "Catedral de Barcelona, Spain" },
        { time: "09:30", title: "チェックアウト・空港へ", type: "transport", desc: "名残惜しいですが、ホテルをチェックアウト。タクシー等でエル・プラット空港へ向かいます。", tip: "市内から空港までは約30〜40分。国際線の出発＆免税手続きがあるため早めに動きます。", map: "Hotel Born Barcelona, Barcelona, Spain" },
        { time: "10:15", title: "バルセロナT1 到着・手続き", type: "transport", desc: "BCN T1ターミナルでチェックイン。免税手続き（Tax Free）もここで済ませます。", tip: "免税申請はチェックイン前（荷物を預ける前）に保安検査手前で行うのが一般的です。混雑することが多いので時間に余裕を持ちましょう。", map: "Barcelona El Prat Airport T1, Spain" },
        { time: "13:00", title: "バルセロナ発（ZZ318）", type: "transport", desc: "バルセロナ発、香港経由で帰国の途へ。お疲れ様でした！", map: "Barcelona El Prat Airport, Spain" },
      ],
    },
  ],

  checklist: [
    { id: "transfer", title: "空港送迎（MAD / BCN）", desc: "確保済み", isDone: true, type: "done" },
    { id: "sagrada", title: "サグラダ・ファミリア", desc: "確保済み・当日バウチャーを提示", isDone: true, type: "done" },
    { id: "guell", title: "グエル公園", desc: "確保済み（14:00入場枠）", isDone: true, type: "done" },
    { id: "palace", title: "王宮（マドリード）", desc: "3/10 13:00枠を確保済み（オーディオガイド付き）", isDone: true, type: "done" },
    { id: "flamenco", title: "フラメンコ「Cardamomo または 1911」", desc: "要事前予約（どちらかお好みで）", isDone: false, type: "required" },
    { id: "prado", title: "プラド美術館", desc: "3/11 午後に行く場合は予約推奨", isDone: false, type: "recommended" },
    { id: "reinasofia", title: "ソフィア王妃芸術センター", desc: "3/11 10:00枠を確保済み", isDone: true, type: "done" },
    { id: "7portes", title: "老舗レストラン「7 Portes」", desc: "要予約（名物パエリア・通し営業）", isDone: false, type: "required" },
    { id: "picasso", title: "ピカソ美術館", desc: "3/12 17:30枠を確保済み", isDone: true, type: "done" },
    { id: "escriba", title: "シーフード「Xiringuito Escribà」", desc: "予約推奨（混雑期のディナー難民対策）", isDone: false, type: "recommended" },
    { id: "batllo", title: "カサ・バトリョ", desc: "3/14 8:30枠を確保済み", isDone: true, type: "done" },
    { id: "mila", title: "カサ・ミラ", desc: "3/14 13:00枠を確保済み", isDone: true, type: "done" },
  ],
};
