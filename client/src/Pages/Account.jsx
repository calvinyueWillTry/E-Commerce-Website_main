import { useQuery, useMutation } from '@apollo/client';
import { QUERY_CURRENT } from '../utils/queries'; 
import Auth from '../utils/auth';

function Account() {

  const { loading, data } = useQuery(QUERY_CURRENT);

  const userData = data?.current || {};
    console.log(userData);

    return (
      <div>

        <div>
          <h1 className = "text-center text-light m-3">Account Page</h1>
        </div>

        <div className = "mt-4 p-2 bg-dark text-white rounded">
          <p>Username: {userData.username}</p>
          <p>Email: {userData.email}</p>
          <p>Shipping Address: {userData.shippingAddress}</p>
        </div>

        <div>
          <h1 className = "text-center text-light m-3">Products For Sale</h1>
        </div>

        <div className="row row-cols-1 row-cols-md-2 g-4">
        {userData.productsForSale?.map((product) => {
        return (
        <div className="col">
          <div className="card my-4 h-100">
            <img className="card-img-top" src="/src/public/images/No_Image_available.jpg" alt="product image"></img>
              <div className="card-body">
                <h3 className="card-title">{product.productName}</h3>
                <p className="card-text">{product.description}</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">
                    <a href="#" className="btn">View</a>
                  </small>
                </div>
          </div>
        </div>
        );
        })}
      </div>

      <div className="row row-cols-1 row-cols-md-2 g-4">
        {userData.productsForSale?.map((product) => {
        return (
        <div className="col">
          <div className="card my-4 h-100">
            <img className="card-img-top" src="/src/public/images/No_Image_available.jpg" alt="product image"></img>
              <div className="card-body">
                <h3 className="card-title">{product.productName}</h3>
                <p className="card-text">{product.description}</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">
                    <a href="#" className="btn">View</a>
                  </small>
                </div>
          </div>
        </div>
        );
        })}
      </div>

      </div>
    )
};

export default Account;