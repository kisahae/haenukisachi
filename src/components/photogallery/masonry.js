import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import img1 from "../../images/img1.jpg"
import img2 from "../../images/img2.jpg"
import img3 from "../../images/img3.jpg"
import img4 from "../../images/img4.jpg"
import img5 from "../../images/img5.jpg"
import img6 from "../../images/img6.jpg"


const images = [
    img1,img2,img3,img4,img5,img6
]

function React_Masonry(){
    return <ResponsiveMasonry style={{padding:"10px"}}
    columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
>
    <Masonry gutter="10px">
        {images.map((image, i) => (
            <img
                key={i}
                src={image}
                style={{width: "100%", display: "block",filter:"grayscale(100%)"}}
                alt=""
            />
        ))}
    </Masonry>
</ResponsiveMasonry>
}

export default React_Masonry