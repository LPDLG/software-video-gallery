const grid = document.querySelector("#video-grid");
const search = document.querySelector("#search");
const empty = document.querySelector("#empty-state");

function render(items) {
  grid.innerHTML = items.map((video, index) => `
    <article class="video-card" style="--delay:${index * 45}ms">
      <a class="poster-link" href="watch.html?v=${video.id}" aria-label="播放 ${video.title}">
        <img src="${video.poster}" alt="${video.title} 视频封面" loading="lazy">
        <span class="play-button">▶</span>
        <span class="duration">${video.duration}</span>
      </a>
      <div class="card-content">
        <div class="card-heading">
          <div>
            <span class="card-index">${video.id}</span>
            <h3>${video.title}</h3>
          </div>
          <img class="mini-qr" src="${video.qr}" alt="${video.title} 播放二维码" loading="lazy">
        </div>
        <p>${video.description}</p>
        <a class="card-link" href="watch.html?v=${video.id}">打开播放页 <span>→</span></a>
      </div>
    </article>
  `).join("");
  empty.hidden = items.length !== 0;
}

search.addEventListener("input", () => {
  const query = search.value.trim().toLocaleLowerCase();
  render(window.VIDEOS.filter(video => video.title.toLocaleLowerCase().includes(query)));
});

document.querySelector("#video-count").textContent = `${window.VIDEOS.length} 个视频`;
render(window.VIDEOS);
