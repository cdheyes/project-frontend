import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";


    const cld = new Cloudinary({
        cloud: {
        cloudName: "ifeomaimoh"
      }
});
    export const Turkish = () => {
      const file =
        "https://res.cloudinary.com/silorain/image/upload/v1653903645/Final%20Project/turkish/Screenshot_2022-05-30_at_10.39.47_j6pwll.png";
      let image = cld.image(file);
      image = image.setDeliveryType("fetch");
      image = image
        .resize(fill().height(500).width(490))
        .roundCorners(byRadius().radius(40))

    
      // This gives the full delivery URL of the tranformations applied above.
      console.log({ url: image.toURL() });
    
      return (
        <div style={{ padding: "5rem" }}>
          <AdvancedImage cldImg={image} />
        </div>
      );
    };
