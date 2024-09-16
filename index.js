const n = 33;  // number of challenges.
// time.
var time, h, m, s, section;
function clock_display(){
    time = new Date();
    h = time.getHours();
    m = time.getMinutes();
    s = time.getSeconds();
    section = h * 4 + Math.floor(m / 15);  //frequency.
    $('#hour').text(String(h).padStart(2, '0'));
    $('#minute').text(String(m).padStart(2, '0'));
    $('#second').text(String(s).padStart(2, '0'));
}

// random number.
class Random{
    constructor(seed = 88675123){
        this.x = 123456789;
        this.y = 362436069;
        this.z = 521288629;
        this.w = seed;
    }
    next(){
        let t;
        t = this.x ^ (this.x << 11);
        this.x = this.y; this.y = this.z; this.z = this.w;
        return this.w = (this.w ^ (this.w >>> 19)) ^ (t ^ (t >>> 8)); 
    }
    nextInt(min, max){
        const r = Math.abs(this.next());
        return min + (r % (max + 1 - min));
    }
}

const seed = 917;
const random = new Random(seed);
var challenge_list = [
    ["錦城こと「大阪城」の雄姿を写真に収めよ", 60],
    ["深縹に輝く「大阪湾」を写真に収めよ", 60],
    ["漢数字がつく駅を3つ巡れ", 90],
    ["日本が誇る高速鉄道・新幹線を撮影せよ", 60],
    ["会社の名が入った駅を訪れろ", 60],
    ["「大阪」のつく駅に向かえ", 60],
    ["名前が6文字以上の駅に行け", 60],
    ["神社と寺院、両方とも参拝せよ", 90],
    ["1駅歩け", 60],
    ["大阪市外に30分間滞在せよ", 60],
    ["1路線、端から端まで乗り通せ", 120],
    ["琵琶湖から流れる一級河川「淀川」を渡れ", 60],
    ["古墳を訪れ、太古の世界を感じろ", 90],
    ["私鉄の駅を覗け", 60],
    ["メトロ以外の車両に乗れ", 60],
    ["飛行機の写真を撮影せよ", 90],
    ["大阪名物たこ焼きを賞味せよ", 60],
    ["万博の怪物ミャクミャクの目撃写真を5枚撮影せよ", 90],
    ["大阪万博ラッピングの車両に乗れ", 90],
    ["大阪にあるテレビ局へ急行せよ", 60],
    ["守口車庫行の大阪シティバスに乗れ", 60],
    ["大阪市内に位置する大学のキャンパスにお邪魔せよ", 60],
    ["3路線が乗り入れる駅で降りろ", 60],
    ["メトロ全路線の同じ駅番号をコンプリートせよ", 120],
    ["大阪市立図書館に来館せよ", 60],
    ["大阪以外にも同名の駅がある駅に行け", 60],
    ["8×4！「橋」の名前がつく駅4駅でそれぞれ8分待機せよ", 90],
    ["梅田ダンジョンこと「キタエリア」に30分間滞在せよ", 60],
    ["大阪名物ミックスジュースを飲め", 60],
    ["今里ライナーに乗ってみよう", 60],
    ["先回り！なにわ筋線が通る予定の駅をすべて踏破せよ", 120],
    ["大阪24区のうち、8区を通過せよ", 90],
    ["「地下鉄空白地帯」西淀川区および此花区に行け", 90]
];
for(i=n-1; i>0; i--){
    const j = random.nextInt(0, i);
    [challenge_list[i], challenge_list[j]] = [challenge_list[j], challenge_list[i]];
}

const station_list = [
    "梅田",
    "淀屋橋",
    "本町",
    "心斎橋",
    "なんば",
    "大国町",
    "西梅田",
    "肥後橋",
    "四ツ橋",
    "東梅田",
    "南森町",
    "天満橋",
    "谷町四丁目",
    "谷町六丁目",
    "谷町九丁目",
    "四天王寺前夕陽ヶ丘",
    "天王寺",
    "扇町",
    "北浜",
    "堺筋本町",
    "長堀橋",
    "日本橋",
    "恵美須町",
    "玉川",
    "阿波座",
    "西長堀",
    "桜川",
    "鶴橋",
    "弁天町",
    "九条",
    "森ノ宮",
    "大正",
    "ドーム前千代崎",
    "西大橋",
    "松屋町",
    "玉造",
    "大阪ビジネスパーク",
    "京橋"
]

// display.
$(function(){
    clock_display();
    $('#challenge').text(challenge_list[section % n][0]);
    $('#time_limit').text(challenge_list[section % n][1]);
    $('#start_point').text(station_list[Math.floor(Math.random() * 38)]);
    setInterval(function(){
        clock_display();
        $('#challenge').text(challenge_list[section % n][0]);
        $('#time_limit').text(challenge_list[section % n][1]);
    }, 1000);
});