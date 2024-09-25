import React from 'react';
import mainImage from '../assets/image.png'; 
import women from '../assets/women.webp'
const categories = [
    {
      title: "TRAVELS",
      description: "Ut at felis pulvinar, volutpat eros et, egestas purus. Integer id velit ac sem porttitor pulvinar. Cras varius quam ac tortor vehicula molestie. Nunc at mauris at tortor pretium vestibulum.",
      image: women
    },
    {
      title: "INTERIORS",
      description: "Ut at felis pulvinar, volutpat eros et, egestas purus. Integer id velit ac sem porttitor pulvinar. Cras varius quam ac tortor vehicula molestie. Nunc at mauris at tortor pretium vestibulum.",
      image: women
    },
    {
      title: "PERSONAL DEVELOPMENT",
      description: "Ut at felis pulvinar, volutpat eros et, egestas purus. Integer id velit ac sem porttitor pulvinar. Cras varius quam ac tortor vehicula molestie. Nunc at mauris at tortor pretium vestibulum.",
      image: women, 
    },
    {
      title: "HEALTHY FOOD",
      description: "Ut at felis pulvinar, volutpat eros et, egestas purus. Integer id velit ac sem porttitor pulvinar. Cras varius quam ac tortor vehicula molestie. Nunc at mauris at tortor pretium vestibulum.",
      image: women
    },
  ];
  const articles = [
    {
      title: "15 ways to start eating healthy",
      date: "2 April 2006",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet pulvinar sem. Nullam vel accumsan dui.",
      imageUrl: women
    },
    {
      title: "Healthy and sweet substitutes",
      date: "2 April 2006",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet pulvinar sem. Nullam vel accumsan dui.",
      imageUrl: women
    },
    {
      title: "A healthy lunch in 15 minutes",
      date: "2 April 2006",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet pulvinar sem. Nullam vel accumsan dui.",
      imageUrl: women
    },
    {
      title: "My trip to the Philippines",
      date: "2 April 2006",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet pulvinar sem. Nullam vel accumsan dui.",
      imageUrl: women
    }
  ];
  const Article = ({ title, date, description, imageUrl }) => (
    <div style={{
      width: 'calc(35% - 20px)', 
    
      borderRadius: '5px', 
     
      overflow: 'hidden', 
      marginBottom: '20px',
      marginLeft:'200px'
    }}>
      <img 
        src={imageUrl} 
        alt={title} 
        style={{
          width: '100%', 
          height: '200px', 
          objectFit: 'cover'
        }} 
      />
      <div style={{ padding: '20px' }}>
        <h3 style={{ fontSize: '18px', color: '#333', marginBottom: '10px' }}>
          {title}
        </h3>
        <p style={{ fontSize: '14px', color: '#999', marginBottom: '15px' }}>
          {date}
        </p>
        <p style={{ fontSize: '14px', color: '#666', marginBottom: '20px' }}>
          {description}
        </p>
        <a  style={{ fontSize: '14px', color: '#5a7f5f', textDecoration: 'none' }}>
          Read more →
        </a>
      </div>
    </div>
  );
  const CategoryCard = ({ title, description, image }) => (
    <div style={{
      width: '250px',
    
      textAlign: 'center',
     
      borderRadius: '5px',
      
      overflow: 'hidden',
      margin:'20px'
    }}>
      <div style={{ position: 'relative', display: 'inline-block' }}>
  <img src={image} alt={title} style={{ width: '250px', height: '220px' ,borderRadius:'5px'}} />

  <div style={{
    backgroundColor: '#5a7f5f',
    width: '120px',
    color: '#fff',
    padding: '10px 20px',
    position: 'absolute',
    fontSize: '15px',
    fontWeight: 'bold',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    top: '100%',      
    left: '50%',      
    transform: 'translate(-50%, -50%)', 
    
  }}>
    {title}
  </div>
</div>

      <p style={{
        padding: '15px',
        fontSize: '0.9rem',
        color: '#333333',
      }}>
        {description}
      </p>
    </div>
  );
const Homepage = () => {
  return (
    <div style={{backgroundColor:'white',height:'4000px'}}><div style={{ 
        width: '100%', 
        height: '100vh', 
        position: 'relative', 
        overflow: 'hidden',
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <img 
          src={mainImage} 
          alt="Homepage" 
          style={{ 
            width: '1470px', 
            height: '100%', 
            objectFit: 'cover',
          
            top: 0, 
            left: 0 
          }} 
        />
        <div style={{
          position: 'absolute',
          color: '#658265', 
          fontSize: '100px',
          marginTop:'100px',
          marginLeft:'500px',
          fontFamily:"sans-serif"
              
        }}>
          <span style={{color:'#3E613E'}}>My</span> <br /> lifestyle<br /> blog
        </div>
      </div>
      <div style={{width:'1000px', display:'flex',alignItems:'center',justifyContent:'center',marginLeft:'240px',marginTop:'80px'}} >
        <div style={{width:'377px',color:'#333333',fontSize:'17px'}}><p><span style={{color:'#3E613E',fontSize:'1.4rem'}}>What is this blog about? </span><br />
<span style={{color:'#333333',marginBottom:'20px'}}>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam dui ac nunc egestas interdum. Suspendisse dapibus luctus dolor quis dignissim. Proin ac auctor nibh. Mauris sed urna id elit dictum suscipit. Maecenas hendrerit mollis ligula vel lacinia. Donec tellus nisi, dignissim ut massa at, aliquet posuere augue. Phasellus dapibus libero purus, quis gravida nulla pulvinar at.
</span>
<span style={{color:'#333333'}}>
Morbi porttitor eros magna, convallis vehicula sapien gravida nec. Praesent facilisis elit varius metus fermentum euismod. Phasellus vulputate nunc mi, eget rutrum enim posuere vitae. 
</span>
</p></div>
        <div>
            <img src={women} alt="" style={{width:'320px',height:'380px',marginLeft:'180px'}} />
        </div>
      </div>
      <div style={{marginBottom:'10px',marginLeft
        :'320px'
      }}>
        <div style={{marginTop:'50px',marginLeft:'390px'}}>
        <h1 style={{color:'#658265'}}>Categoreies</h1>
        </div>
        <div style={{
      display: 'flex',
      
      alignItems: 'center',
      flexWrap: 'wrap',
      margin: '20px',
    }}>
      {categories.map((category, index) => (
        <CategoryCard
          key={index}
          title={category.title}
          description={category.description}
          image={category.image}
        />
      ))}
    </div>
        
      </div>
      <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ fontSize: '40px', color: '#5a7f5f', textAlign: 'center', marginBottom: '40px' }}>
    Articles
      </h2>
      <div style={{
        display: 'flex', 
        flexWrap: 'wrap', 
        
        gap: '20px'
      }}>
        {articles.map((article, index) => (
          <Article 
            key={index}
            title={article.title}
            date={article.date}
            description={article.description}
            imageUrl={article.imageUrl}
          />
        ))}
      </div>
    </div>
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '40px', textAlign: 'center' }}>
        <h2 style={{ color: '#5a7f5f', marginBottom: '30px' }}>Subscribe</h2>
        <form  style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ marginBottom: '20px', textAlign: 'left' }}>
            <label style={{ display: 'block', fontSize: '16px', color: '#333' }}>Your e-mail:</label>
            <input
              type="email"
             
              style={{
                backgroundColor:'white',
                width: '100%',
                padding: '10px',
                fontSize: '16px',
                border: '1px solid #ccc',
                borderRadius: '5px'
              }}
            />
          </div>
          <div style={{ marginBottom: '20px', textAlign: 'left' }}>
            <label style={{ display: 'block', fontSize: '16px', color: '#333' }}>Message:</label>
            <textarea
              placeholder="Enter your message here"
           
              
              style={{
                backgroundColor:'white',
                width: '100%',
                padding: '10px',
                fontSize: '16px',
                height: '150px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                resize: 'none'
              }}
            ></textarea>
          </div>
          <button
            type="submit"
            style={{
              width: '620px',
              padding: '10px',
              backgroundColor: '#5a7f5f',
              color: 'white',
              fontSize: '16px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            SEND
          </button>
        </form>

        <footer style={{ marginTop: '60px' }}>
          <nav style={{ marginBottom: '20px' }}>
            <a  style={{ margin: '0 15px', color: '#5a7f5f', textDecoration: 'none', fontSize: '16px' }}>
              Home
            </a>
            <a style={{ margin: '0 15px', color: '#5a7f5f', textDecoration: 'none', fontSize: '16px' }}>
              About me
            </a>
            <a style={{ margin: '0 15px', color: '#5a7f5f', textDecoration: 'none', fontSize: '16px' }}>
              Gallery
            </a>
            <a style={{ margin: '0 15px', color: '#5a7f5f', textDecoration: 'none', fontSize: '16px' }}>
              Cooperation
            </a>
          </nav>
          <div>
            <a  style={{ margin: '0 10px'}}>
              <img src="https://img.freepik.com/premium-photo/facebook-logo-icon_1073075-1680.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1727222400&semt=ais_hybrid" alt="Facebook" style={{height:'20px',width:'30px'}} />
            </a>
            <a style={{ margin: '0 10px' }}>
              <img src="https://img.freepik.com/premium-vector/instagram-vector-logo-icon-social-media-logotype_901408-390.jpg" alt="Instagram" style={{height:'20px',width:'30px'}}  />
            </a>
            <a href="https://twitter.com" style={{ margin: '0 10px' }}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuPu9d4JnepxqvMOoGL3Pe9_1LFk0uzPRAow&s" alt="Twitter" style={{height:'20px',width:'30px'}} />
            </a>
          </div>
          <div style={{ 
  position: 'fixed', 
  width: '100%', 
  marginTop: '40px', 
  fontSize: '12px', 
  backgroundColor: '#5a7f5f', 
  color: 'white', 
  bottom: 0, 
  textAlign: 'center', 
  padding: '10px 0' 
}}>
  Website created with a tool responsive website builder WebWave <br />
  <a style={{ color: '#333', textDecoration: 'none' }}>
    Privacy policy
  </a>
</div>

        </footer>
      </div>
      </div>
    
  );
};

export default Homepage;
