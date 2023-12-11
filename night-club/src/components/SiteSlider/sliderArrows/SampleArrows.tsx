import './SampleArrows.scss';
import leftArrow from '../../../assets/ico/arrow-left.svg'
import rightArrow from '../../../assets/ico/arrow-right.svg'
export function NextArrow ({ onClick }) {
    return ( 
        <div className="custom-arrow next" onClick={onClick}>
            <i className="fas fa-chevron-right">
                <img src={rightArrow} alt="" />
            </i>
        </div>
    );
}

export const PrevArrow  = ({ onClick }) => (
    <div className="custom-arrow prev" onClick={onClick}>
      <i className="fas fa-chevron-left">
        <img src={leftArrow} alt="" />
      </i>
    </div>
);