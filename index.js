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

const seed = 243;
const random = new Random(seed);
var challenge_list = [
    ["錦城こと「大阪城」を訪れて15分滞在せよ", 60],
    ["深縹に輝く「大阪湾」を訪れて15分滞在せよ", 60],
    ["漢数字がつく駅を3つ巡れ", 90],
    ["日本が誇る高速鉄道・新幹線を撮影せよ", 60],
    ["「大阪」が名前につく駅に向かえ！", 60],
    ["神社と寺院、両方とも参拝せよ", 90],
    ["一駅歩け×2", 30],
    ["大阪市外に30分滞在せよ", 60],
    ["一路線、端から端まで乗り通せ(私鉄含む)", 120],
    ["琵琶湖から流れる一級河川「淀川」を2回渡れ(復乗を除く)", 90],
    ["古墳を訪れて15分滞在せよ", 90],
    ["メトロ以外の車両に2種類乗れ", 60],
    ["守口車庫行のシティバスに乗れ", 60],
    ["大阪市内に位置する大学のキャンパスにお邪魔せよ！", 60],
    ["三路線が乗り入れている駅に行け！", 60],
    ["大阪以外にも同名の駅がある駅に行け！", 60],
    ["なにわ筋線が通る予定の駅のうち3つに行け", 90],
    ["中之島に1時間滞在", 120],
    ["梅田の地下街に1時間滞在", 120],
    ["橋を5個徒歩で渡る", 90],
    ["木津川駅へ行く", 60],
    ["チームメンバーの誰かの名前のどれかの漢字がついた駅・バス停に行く", 60],
    ["たこ焼きとイカ焼きを両方食べる！！", 60],
    ["天神橋筋商店街踏破（所要時間約40分）", 90],
    ["大阪名物「りくろーおじさんのチーズケーキ」の店に行け", 60],
    ["ニュートラムに10分以上乗れ", 60],
    ["長居公園へ行って15分滞在せよ", 60],
    ["読みが2文字の駅に行け", 60],
    ["大阪万博ラッピング車両を目撃せよ（会社は問わない）", 60],
    ["化学の教科書の表紙でおなじみ「阿波座ジャンクション」を、表紙の画角で撮影し、15分滞在", 60],
    ["大阪メトロの車庫を訪問せよ", 60],
    ["ビルを貫く阪神高速を撮影して15分に滞在", 60],
    ["先日オープンしたグラングリーン南館を含む「うめきた」(旧梅田貨物駅)に15分滞在", 60],
    ["今里ライナーに乗れ", 60],
    ["200m以上300m未満の建物を撮影し、付近に15分滞在", 60],
    
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
