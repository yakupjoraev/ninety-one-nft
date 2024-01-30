import { Link } from "react-router-dom";

const DashboardFooter: React.FunctionComponent = () => {
  return (
    <div className="content__footer">
        <Link to={'#'} className="content__footer-link">White paper</Link>
        <Link to={'#'} className="content__footer-link">Tocenomics</Link>
        <Link to={'#'} className="content__footer-link">Privacy Policy</Link>
        <Link to={'#'} className="content__footer-link">Project Team</Link>
        <Link to={'#'} className="content__footer-link">News</Link>
        <Link to={'#'} className="content__footer-link">Security Data</Link>
        <Link to={'#'} className="content__footer-link">Contact Us</Link>
    </div>
  )
}

export default DashboardFooter