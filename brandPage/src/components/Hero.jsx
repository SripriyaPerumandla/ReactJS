const Hero=()=>{
    return <main className='hero container'>
     <div className='hero-content'>
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES.</p>
        <div class='hero-btn'>
            <button>Shop Now</button>
            <button className='secondary-btn'>Category</button>
        </div>
        <div className='shopping'>
            <p>Also Available On</p>
            <div className='brand-icons'>
                <img src='/images/amazon.png' alt='amazon-image'></img>
                <img src='/images/flipkart.png' alt='flipkart-image'></img>
            </div>
        </div>
     </div>
     <div className='hero-image'>
     <img src='/images/shoe_image.png' alt='shoe-image'></img>
     </div>
    </main>;
}
export default Hero;