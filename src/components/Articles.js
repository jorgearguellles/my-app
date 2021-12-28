import "./styles/Articles.css";
import Article from "./Article";


const Articles = () => {
  return (
    <div className='articles-section'>
      <h2 className="articles-title">Promoted Articles</h2>
      <div className='articles-container'>
        <Article 
          title="How do I create a Praxu account?"
          details="Learn how you can develop with Praxu ..."
          />
        <Article 
          title="How do I sell a ticket in Praxu?"
          details="Learn how you can develop with Praxu ..."
          />
        <Article 
          title="What can I do if I think my account is compromised?"
          details="Learn how you can develop with Praxu ..."
          />
        <Article 
          title="How does the fee structure work on Praxu?"
          details="Learn how you can develop with Praxu ..."
          />
          <Article 
          title="How do I find my funds on Solana?"
          details="Learn how you can develop with Praxu ..."
          />
        <Article 
          title="Which blockchains does Praxu support?"
          details="Learn how you can develop with Praxu ..."
          />
        <Article 
          title="Where can I find a new ticket release?"
          details="Learn how you can develop with Praxu ..."
          />
        <Article 
          title="How do I keep my wallet and funds safe?"
          details="Learn how you can develop with Praxu ..."
          />
          <Article 
          title="How can I report fradulent content on Praxu?"
          details="Learn how you can develop with Praxu ..."
          />
        <Article 
          title="How can I buy a ticket on Praxu?"
          details="Learn how you can develop with Praxu ..."
          />
      </div>
    </div>
  )
}

export default Articles
