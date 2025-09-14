import React from "react";

//define component
const UrlShortner = () => {
  //Decalare state for input url
  const [originalUrl, setOriginalUrl] = React.useState("");
  const [shortUrl, setShortUrl] = React.useState("");
  //handle input changes
  const handleChange = (event) => {
    setOriginalUrl(event.target.value);
  };
  //handle form submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    const apiUrl="http://localhost:8080/api/url/shorten";
    try{
        const response=await fetch(apiUrl,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({originalUrl}),
        });
        const data=await response.json();
        setShortUrl(data.shortUrl);
    }catch(error){
        console.error("Error shortening URL:", error);
    }
  };
  return (
    <div
      style={{
        minHeight: "calc(100vh - 70px)",
        width: "100vw",
        background: "linear-gradient(135deg, #e0e7ff 0%, #f0f4ff 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem 0",
      }}
    >
      <div
        className="url-shortener-container"
        style={{
          width: 380,
          background: "#fff",
          padding: "2.5rem 2rem",
          borderRadius: 18,
          boxShadow: "0 8px 32px #0058b033",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "1.5rem",
            color: "#0058b0",
          }}
        >
          ✂️ URL Shortener
        </h2>
        <form
          onSubmit={handleSubmit}
          className="url-shortener-form"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.2rem",
            width: "100%",
          }}
        >
          <input
            type="url"
            placeholder="Paste your long URL here..."
            value={originalUrl}
            onChange={handleChange}
            required
            style={{
              padding: "0.75rem 1rem",
              borderRadius: 8,
              border: "1.5px solid #b6c6e6",
              fontSize: "1rem",
              outline: "none",
              transition: "border 0.2s",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "0.75rem",
              borderRadius: 8,
              background:
                "linear-gradient(90deg, #0058b0 60%, #4f8cff 100%)",
              color: "#fff",
              border: "none",
              fontWeight: 700,
              fontSize: "1rem",
              letterSpacing: "0.5px",
              cursor: "pointer",
              boxShadow: "0 2px 8px #0058b022",
              transition: "background 0.2s",
            }}
          >
            Shorten URL
          </button>
        </form>
        {shortUrl && (
          <div
            className="url-result"
            style={{
              marginTop: "1.5rem",
              textAlign: "center",
              background: "#f0f4ff",
              padding: "1rem",
              borderRadius: 10,
              boxShadow: "0 1px 4px #0058b011",
              width: "100%",
              wordBreak: "break-all",
            }}
          >
            <span
              style={{
                color: "#0058b0",
                fontWeight: 600,
              }}
            >
              Short URL:
            </span>{" "}
            <a
  href={shortUrl}
  style={{
    color: "#4f8cff",
    textDecoration: "underline",
  }}
  target="_blank"
  rel="noopener noreferrer"
>
  {shortUrl}
</a>
          </div>
        )}
      </div>
    </div>
  );
};
export default UrlShortner;