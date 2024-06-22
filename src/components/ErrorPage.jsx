import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="bg-[#0C0C0C] min-h-screen">
            <div className="flex justify-center items-center">
                <figure className="max-w-96 mt-20">
                    <img src="https://i.ibb.co/WPZsTbp/error.png" alt="not found" />
                </figure>
            </div>
            <div className="text-center pb-10 text-[#F2613F]">
                <h1 className="text-2xl font-semibold mb-2">Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p className="mb-4">
                    <i>{error.statusText || error.message}</i>
                </p>
                <Link to='/'><button className="btn text-lg bg-transparent text-white hover:bg-orange-500 hover:border-0 border-orange-500">Go to Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;