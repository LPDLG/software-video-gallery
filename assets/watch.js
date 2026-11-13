const params = new URLSearchParams(location.search);
const video = window.VIDEOS.find(item => item.id === params.get("v"));
const shell = document.querySelector("#player-shell");
const missing = document.querySelector("#not-found");

if (!video) {
  shell.hidden = true;
  missing.hidden = false;
} else {
  document.title = `${video.title}｜软件视频库`;
  const player = document.querySelector("#player");
  player.src = video.file;
  player.poster = video.poster;
  document.querySelector("#video-title").textContent = video.title;
  document.querySelector("#video-description").textContent = `${video.description} 视频时长 ${video.duration}。`;
  document.querySelector("#qr-image").src = video.qr;
  const download = document.querySelector("#download-link");
  download.href = video.file;
  download.download = `${video.title}.mp4`;

  document.querySelector("#copy-link").addEventListener("click", async event => {
    await navigator.clipboard.writeText(location.href);
    event.currentTarget.textContent = "已复制";
    setTimeout(() => event.currentTarget.textContent = "复制播放链接", 1500);
  });
}
