import React, { useState, useEffect } from 'react';
import '../Styles/Categories.css';

const images = [
  'https://static.toiimg.com/thumb/msid-92443076,width-1070,height-580,resizemode-75/92443076,pt-32,y_pad-40/92443076.jpg',
  'https://media-cdn.tripadvisor.com/media/photo-c/1280x250/07/c1/75/9d/a-beautiful-view-from.jpg',
  'https://media.easemytrip.com/media/Blog/India/637870903728666071/637870903728666071B4iTsT.jpg',
  'https://cms.musafir.com/uploads/df9a883d_a285_4e7b_bf07_f88f796bc4da_8c5e98e9cb.jpeg',
  'https://www.tripsavvy.com/thmb/h-vEuKNoD1uu1cW8AHh_L8YGn24=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1075879774-714c3b3b727d4d8c8dc9f66a12ea7d03.jpg'
];

const Categories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []);

  return (
    <div className="categories">
     
      <div className="image-slider">
        <div className="slider-container" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Slide ${index + 1}`} className="slide-image" />
          ))}
        </div>
      </div>
      <div className='travel'>
       Travels</div>
       <div className='row1'>
       <div className='set1'>
          <img 
          className='zoom-img'
          style={{
            width: '75%',
            height: '350px',
            objectFit: 'cover',
            borderRadius: '10px'
          }}
           src='https://miro.medium.com/v2/resize:fit:1140/0*JLs-oCiMoRtmnMpv.jpg'></img>
          <div className='set2'>
          <h3>My trip to Karanataka</h3>
          <p>25th SEP 2024</p>
          <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga ea, repellendus aut eum necessitatibus nostrum a amet unde eos fugiat nihil, adipisci similique id culpa tenetur voluptatibus perspiciatis neque totam Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis delectus sequi sed, explicabo numquam autem optio consequuntur inventore accusantium voluptates nostrum nisi, magni animi nemo omnis suscipit porro tenetur ad!?</span>
          </div></div>

          <div className='set1'>
          <img style={{
            width: '75%',
            height: '350px',
            objectFit: 'cover',
            borderRadius: '10px'
          }}
          className='zoom-img'
           src='https://www.indiatravel.app/wp-content/uploads/2024/03/places-to-visit-in-chhattisgarh.jpg'></img>
          <div className='set2'>
          <h3>My trip to chhattisgarh</h3>
          <p>29th SEP 2024</p>
          <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga ea, repellendus aut eum necessitatibus nostrum a amet unde eos fugiat nihil, adipisci similique id culpa tenetur voluptatibus perspiciatis neque totam Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit odio possimus aperiam ipsum, eos incidunt, adipisci accusamus cum soluta deserunt inventore beatae ducimus libero. Soluta sit provident magnam? Quas, mollitia!?</span>
          </div></div>
       </div>
       <div className='row1'>
       <div className='set1'>
          <img 
          className='zoom-img'
          style={{
            width: '75%',
            height: '350px',
            objectFit: 'cover',
            borderRadius: '10px'
          }}
           src='https://www.trawell.in/images/pics/maharashtra_best_main.jpg'></img>
          <div className='set2'>
          <h3>My trip to maharastra</h3>
          <p>2nd OCT 2024</p>
          <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga ea, repellendus aut eum necessitatibus nostrum a amet unde eos fugiat nihil, adipisci similique id culpa tenetur voluptatibus perspiciatis neque totam Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis delectus sequi sed, explicabo numquam autem optio consequuntur inventore accusantium voluptates nostrum nisi, magni animi nemo omnis suscipit porro tenetur ad!?</span>
          </div></div>

          <div className='set1'>
          <img style={{
            width: '75%',
            height: '350px',
            objectFit: 'cover',
            borderRadius: '10px'
          }}
          className='zoom-img'
           src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHixg_vpY9_Ln9PEdTS9nOHsrXBqwg0mV2Rg&s'></img>
          <div className='set2'>
          <h3>My trip to Kashmir</h3>
          <p>29th SEP 2024</p>
          <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga ea, repellendus aut eum necessitatibus nostrum a amet unde eos fugiat nihil, adipisci similique id culpa tenetur voluptatibus perspiciatis neque totam Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit odio possimus aperiam ipsum, eos incidunt, adipisci accusamus cum soluta deserunt inventore beatae ducimus libero. Soluta sit provident magnam? Quas, mollitia!?</span>
          </div></div>
       </div>
    </div>
  );
};

export default Categories;
