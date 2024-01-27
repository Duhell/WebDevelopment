window.onload = function () {
  const videorate = document.getElementById("herovideo");
  if (videorate) {
    videorate.playbackRate = .8;
  }
};


export function HeroComponent() {
  return `
        <div class="video-background">
            <video id="herovideo" autoplay muted loop>
                <source src="/resources/sea.webm" type="video/mp4">
                Your browser does not support the video tag.
            </video>

            <div class="center-text">
                <p>WEB DEVELOPMENT</p>
            </div>
        </div>
    `;
}
