socket.on("onlineCount", (count) => {
    document.getElementById("online").textContent = count;
});
document.getElementById("online").textContent = 1;
document.getElementById("bilgiKutusu").scrollIntoView({
    behavior: "smooth"
});
document.getElementById("bilgiKutusu").innerHTML =
"<h2>📖 Bilgi</h2><p>"+yazi+"</p>";

document.getElementById("bilgiKutusu").scrollIntoView({
    behavior: "smooth"
});