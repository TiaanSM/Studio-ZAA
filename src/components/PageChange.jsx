import '../App.css';

const PageChange = (props) => {


  return (

    <>
      <div className={props.pageLoaded === true ? 'animated-box-1' : 'box1'}></div>
      <div className={props.pageLoaded === true ? 'animated-box-2' : 'box2'}></div>
      <div className={props.pageLoaded === true ? 'animated-box-3' : 'box3'}></div>
    </>

  )
}

export default PageChange