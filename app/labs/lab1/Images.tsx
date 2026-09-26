export default function Images() {
  return (
    <div id="wd-images">
      <h4>Image tag</h4>
      Loading an image from the internet:
      <br />
      <img
        id="wd-starship"
        width="400px"
        alt="Starship"
        src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
      />
      <br />
      Loading a local image:
      <br />
      <img
        id="wd-teslabot"
        src="/images/teslabot.jpg"
        height="200px"
        alt="Tesla Bot (Optimus) humanoid robot"
      />
      <br />
      <img 
        id="wd-your-image"
        alt="Bike"
        width="300px"
        height="200px"
        src="https://images.singletracks.com/blog/wp-content/uploads/2015/03/image70604-orig.jpg"
      />
      <br />
      <img
        id="wd-ai-image"
        alt="Earth from space"
        width="200px"
        src="https://eoimages.gsfc.nasa.gov/images/imagerecords/57000/57723/globe_west_2048.jpg"
      />
    </div>
  );
}