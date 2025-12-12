document.addEventListener("DOMContentLoaded", () => {
  const sections = [
  { id: "about-text", file: "./texts/common/about.txt" },
  { id: "contact-text", file: "./texts/common/contact.txt" },
  { id: "donation-text", file: "./texts/common/donation.txt" },
  { id: "donation-detail-text", file: "./texts/common/donation-detail.txt" },
  { id: "event-text", file: "./texts/event/event.txt" },
  { id: "event-detail-text", file: "./texts/event/event-detail.txt" },
  { id: "program-text", file: "./texts/event/program.txt" },
  { id: "access-text", file: "./texts/event/access.txt" },
  { id: "ticket-text", file: "./texts/event/ticket.txt" },
  { id: "past-event-text", file: "./texts/event/past-event.txt" },
  { id: "head-news-text", file: "./texts/news/head-news.txt" },
  { id: "past-news-text1", file: "./texts/news/past-news1.txt" },
  { id: "past-news-text2", file: "./texts/news/past-news2.txt" },
    // 他にもあればここに追加してOK！program-text
  ];

  sections.forEach(section => {
    fetch(section.file)
      .then(response => {
        if (!response.ok) throw new Error(`読み込み失敗: ${section.file}`);
        return response.text();
      })
      .then(text => {
        document.getElementById(section.id).innerHTML = text;
      })
      .catch(error => {
        document.getElementById(section.id).textContent = error.message;
      });
  });
});