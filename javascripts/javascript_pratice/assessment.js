
  const INITIAL_BOOK_LIST = [
    {
      name: "Charlotte's web",
      poster: "https://cdn.britannica.com/64/103064-050-295C6879/Charlottes-Web-EB-Garth-Williams.jpg",
      rating: 8.8,
      summary: "The novel tells the story of a livestock pig named Wilbur and his friendship with a barn spider named Charlotte."
    },
    {
      name: "Attitude is everything",
      poster: "https://miro.medium.com/max/1400/1*ItFOYfi8Dyy0yj9n1SE8uQ.jpeg",
      rating: 8.1,
      summary: "Attitude is a mental position with regard to a fact or state."
    },
    {
      name: "The Secret",
      poster: "https://m.media-amazon.com/images/I/81fdQIY6ykL.jpg",
      rating: 8.8,
      summary: "Your thoughts control the universe through the law of attraction."
    },
    {
      name: "Discover Your Destiny",
      poster: "https://m.media-amazon.com/images/I/61t18yWH5qL.jpg",
      rating: 6,
      summary: "Happiness cannot be achieved by success alone."
    },
    {
      name: "The 5 AM Club",
      poster: "https://m.media-amazon.com/images/I/71zytzrg6lL.jpg",
      rating: 8.6,
      summary: "A billionaire mentor teaches the power of waking up early."
    },
    {
      name: "Atomic Habits",
      poster: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg",
      rating: 8,
      summary: "Small habits create massive success."
    },
     {
    name: "I Can Do It",
    poster: "https://images-na.ssl-images-amazon.com/images/I/81T3L1yTJwL.jpg",
    rating: 8,
    summary:
      "Hay shows you that you “can do it”—that is, change and improve virtually every aspect of your life—by understanding and using affirmations correctly. Louise explains that every thought you think and every word you speak is an affirmation. Even your self-talk, your internal dialogue, is a stream of affirmations.",
  }
  ];

  const container = document.getElementById("book-container");

  container.style.display = "grid";
  container.style.gridTemplateColumns = "repeat(3, 1fr)";
  container.style.gap = "50px";
  container.style.padding = "20px";

  INITIAL_BOOK_LIST.forEach(book => {

    const card = document.createElement("div");
    card.style.padding = "15px";
    
    const img = document.createElement("img");
    img.src = book.poster;
    img.style.width = "80%";
    img.style.height = "80%";
    img.style.objectFit = "cover";

    const title = document.createElement("h3");
    title.innerText = book.name;

    const rating = document.createElement("p");
    rating.innerText = book.rating;

    const summary = document.createElement("p");
    summary.innerText = book.summary;
    summary.style.fontSize = "18px";

    card.append(img, title, rating, summary);
    container.appendChild(card);
  });
