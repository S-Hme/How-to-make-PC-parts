
const topics = [
    {title:"TOP",url:"https://s-hme.github.io/Palette/"},
    {title:"【自作PC】TOP",url:"https://s-hme.github.io/How-to-make-PC-main/"},
    {title:"【自作PC】第1回 パーツ",url:"#"},
    {title:"【M1 Mac mini】使用レビュー",url:"#"}
];
for(let i = 0;i < topics.length;i++){
    document.write("<p><a href = " + topics[i].url + ".html" + ">" + topics[i].title + "</a></p>")
}
