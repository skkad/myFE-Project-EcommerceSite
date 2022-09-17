import React,{useState,useEffect} from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";

const Product = ()=>{
    const [data,setData] = useState([]);
    const [filter,setFilter] = useState(data);
    const [loading,setLoding] = useState(false);

    let componentMounted = true;

    useEffect(()=>{
        const getProducts = async ()=>{
            setLoding(true);
            const response = await fetch("https://fakestoreapi.com/products");
            /* const d1 = await response.json();
            // const d2 = await d1.data;
            // console.log(d1); */
            if(componentMounted){
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoding(false);
                // console.log(filter);
            }
            return ()=>{
                // eslint-disable-next-line
                componentMounted = false;
            }
        }
        getProducts();  
    },[]);

    const Loading = ()=>{
        return (
            //npm i react-skeleton-package to replace line34
            <>
                {/* <h2 className="d-flex justify-content-center">Loading.......</h2> */}
                <div className="col-md-3">
                    <Skeleton  height={250}/>
                </div>
                <div className="col-md-3">
                    <Skeleton  height={250}/>
                </div>
                <div className="col-md-3">
                    <Skeleton  height={250}/>
                </div>
                <div className="col-md-3">
                    <Skeleton  height={250}/>
                </div>
            </>
        )
    }

    const filterProducts = (items)=>{
        const updatedList = data.filter((x)=>x.category === items);
        setFilter(updatedList);
    }

    const ShowProducts = ()=>{
        return(
            <>
                <div className="buttons d-flex justify-content-center p-4">
                    <div className="button btn btn-outline-dark me-2 " onClick={()=>setFilter(data)}>All</div>
                    <div className="button btn btn-outline-dark me-2 " onClick={()=>filterProducts("men's clothing")}>Men's</div>
                    <div className="button btn btn-outline-dark me-2 " onClick={()=>filterProducts("women's clothing")}>Women's</div>
                    <div className="button btn btn-outline-dark me-2 " onClick={()=>filterProducts("jewelery")}>Jewllery</div>
                    <div className="button btn btn-outline-dark me-2 " onClick={()=>filterProducts("electronics")}>Electronics</div>
                </div>
                {
                    filter.map((product) => {
                        return(
                            <>
                            <div className="col-md-3 mb-4">
                                <div className="card h-100 text-center p-4" key={product.id}>
                                    <img src={product.image} className="card-img-top" alt={product.title} height="250px"/>
                                    <div className="card-body">
                                        <h5 className="card-title">{product.title.substring(0,12)}</h5>
                                        <p className="card-text lead fw-bold">${product.price}</p>
                                        <NavLink to={`/product/${product.id}`} className="btn btn-outline-dark">Buy</NavLink>
                                    </div>
                                </div>
                            </div>
                            </>
                        )
                    })
                }
            </>
        )
    }

    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
                        <hr/>
                    </div>  
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading/> : <ShowProducts/>}
                </div>
            </div>
        </div>
    );
}

export default Product;