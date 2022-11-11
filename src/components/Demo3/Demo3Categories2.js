import Link from "next/link";
import React from "react";
const Demo3Categories2 = () => {
    return (
        <section
            id="categories-2"
            className="bg-whitesmoke wide-70 categories-section division"
        >
            <div className="container">
                {/* SECTION TITLE */}
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title mb-60">
                            {/* Title 	*/}
                            <h4 className="h4-xl">Top Trending Categories</h4>
                            {/* Text */}
                            <p className="p-md">
                                Aliquam a augue suscipit, luctus neque purus
                                ipsum neque dolor primis libero tempus, blandit
                                posuere and ligula varius magna a porta
                            </p>
                            {/* Button */}
                            <div className="title-btn">
                                <Link href="/categories-list">
                                    <a className="btn btn-tra-grey rose-hover">
                                        View All Categorie
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {/* CATEGORIE BOX #1 */}
                    <div className="col-sm-6 col-lg-3 col-xl-2">
                        <Link href="/category-details">
                            <a>
                                <div className="c2-box text-center">
                                    {/* Icon */}
                                    <img
                                        className="img-70"
                                        src="images/icons/browser-3.png"
                                        alt="category-icon"
                                    />
                                    {/* Text */}
                                    <h5 className="h5-sm">Development</h5>
                                    <p>36 Courses</p>
                                </div>
                            </a>
                        </Link>
                    </div>
                    {/* END CATEGORIE BOX #1 */}
                    {/* CATEGORIE BOX #2 */}
                    <div className="col-sm-6 col-lg-3 col-xl-2">
                        <Link href="/category-details">
                            <a>
                                <div className="c2-box text-center">
                                    {/* Icon */}
                                    <img
                                        className="img-70"
                                        src="images/icons/piggy-bank.png"
                                        alt="category-icon"
                                    />
                                    {/* Text */}
                                    <h5 className="h5-sm">Finance</h5>
                                    <p>28 Courses</p>
                                </div>
                            </a>
                        </Link>
                    </div>
                    {/* END CATEGORIE BOX #2 */}
                    {/* CATEGORIE BOX #3 */}
                    <div className="col-sm-6 col-lg-3 col-xl-2">
                        <Link href="/category-details">
                            <a>
                                <div className="c2-box text-center">
                                    {/* Icon */}
                                    <img
                                        className="img-70"
                                        src="images/icons/mouse-1.png"
                                        alt="category-icon"
                                    />
                                    {/* Text */}
                                    <h5 className="h5-sm">IT &amp; Software</h5>
                                    <p>54 Courses</p>
                                </div>
                            </a>
                        </Link>
                    </div>
                    {/* END CATEGORIE BOX #3 */}
                    {/* CATEGORIE BOX #4 */}
                    <div className="col-sm-6 col-lg-3 col-xl-2">
                        <Link href="/category-details">
                            <a>
                                <div className="c2-box text-center">
                                    {/* Icon */}
                                    <img
                                        className="img-70"
                                        src="images/icons/network.png"
                                        alt="category-icon"
                                    />
                                    {/* Text */}
                                    <h5 className="h5-sm">Networking</h5>
                                    <p>59 Courses</p>
                                </div>
                            </a>
                        </Link>
                    </div>
                    {/* END CATEGORIE BOX #4 */}
                    {/* CATEGORIE BOX #5 */}
                    <div className="col-sm-6 col-lg-3 col-xl-2">
                        <Link href="/category-details">
                            <a>
                                <div className="c2-box text-center">
                                    {/* Icon */}
                                    <img
                                        className="img-70"
                                        src="images/icons/lab.png"
                                        alt="category-icon"
                                    />
                                    {/* Text */}
                                    <h5 className="h5-sm">Sciences</h5>
                                    <p>78 Courses</p>
                                </div>
                            </a>
                        </Link>
                    </div>
                    {/* END CATEGORIE BOX #5 */}
                    {/* CATEGORIE BOX #6 */}
                    <div className="col-sm-6 col-lg-3 col-xl-2">
                        <Link href="/category-details">
                            <a>
                                <div className="c2-box text-center">
                                    {/* Icon */}
                                    <img
                                        className="img-70"
                                        src="images/icons/cash.png"
                                        alt="category-icon"
                                    />
                                    {/* Text */}
                                    <h5 className="h5-sm">Marketing</h5>
                                    <p>68 Courses</p>
                                </div>
                            </a>
                        </Link>
                    </div>
                    {/* END CATEGORIE BOX #6 */}
                    {/* CATEGORIE BOX #7 */}
                    <div className="col-sm-6 col-lg-3 col-xl-2">
                        <Link href="/category-details">
                            <a>
                                <div className="c2-box text-center">
                                    {/* Icon */}
                                    <img
                                        className="img-70"
                                        src="images/icons/encyclopedia.png"
                                        alt="category-icon"
                                    />
                                    {/* Text */}
                                    <h5 className="h5-sm">Languages</h5>
                                    <p>103 Courses</p>
                                </div>
                            </a>
                        </Link>
                    </div>
                    {/* END CATEGORIE BOX #7 */}
                    {/* CATEGORIE BOX #8 */}
                    <div className="col-sm-6 col-lg-3 col-xl-2">
                        <Link href="/category-details">
                            <a>
                                <div className="c2-box text-center">
                                    {/* Icon */}
                                    <img
                                        className="img-70"
                                        src="images/icons/trophy.png"
                                        alt="category-icon"
                                    />
                                    {/* Text */}
                                    <h5 className="h5-sm">
                                        Health &amp; Fitness
                                    </h5>
                                    <p>62 Courses</p>
                                </div>
                            </a>
                        </Link>
                    </div>
                    {/* END CATEGORIE BOX #8 */}
                    {/* CATEGORIE BOX #9 */}
                    <div className="col-sm-6 col-lg-3 col-xl-2">
                        <Link href="/category-details">
                            <a>
                                <div className="c2-box text-center">
                                    {/* Icon */}
                                    <img
                                        className="img-70"
                                        src="images/icons/palette.png"
                                        alt="category-icon"
                                    />
                                    {/* Text */}
                                    <h5 className="h5-sm">Design &amp; Arts</h5>
                                    <p>78 Courses</p>
                                </div>
                            </a>
                        </Link>
                    </div>
                    {/* END CATEGORIE BOX #9 */}
                    {/* CATEGORIE BOX #10 */}
                    <div className="col-sm-6 col-lg-3 col-xl-2">
                        <Link href="/category-details">
                            <a>
                                <div className="c2-box text-center">
                                    {/* Icon */}
                                    <img
                                        className="img-70"
                                        src="images/icons/settings-1.png"
                                        alt="category-icon"
                                    />
                                    {/* Text */}
                                    <h5 className="h5-sm">Engineering</h5>
                                    <p>39 Courses</p>
                                </div>
                            </a>
                        </Link>
                    </div>
                    {/* END CATEGORIE BOX #10 */}
                    {/* CATEGORIE BOX #11 */}
                    <div className="col-sm-6 col-lg-3 col-xl-2">
                        <Link href="/category-details">
                            <a>
                                <div className="c2-box text-center">
                                    {/* Icon */}
                                    <img
                                        className="img-70"
                                        src="images/icons/photo.png"
                                        alt="category-icon"
                                    />
                                    {/* Text */}
                                    <h5 className="h5-sm">Photography</h5>
                                    <p>35 Courses</p>
                                </div>
                            </a>
                        </Link>
                    </div>
                    {/* END CATEGORIE BOX #11 */}
                    {/* CATEGORIE BOX #12 */}
                    <div className="col-sm-6 col-lg-3 col-xl-2">
                        <Link href="/category-details">
                            <a>
                                <div className="c2-box text-center">
                                    {/* Icon */}
                                    <img
                                        className="img-70"
                                        src="images/icons/education.png"
                                        alt="category-icon"
                                    />
                                    {/* Text */}
                                    <h5 className="h5-sm">Life Science</h5>
                                    <p>37 Courses</p>
                                </div>
                            </a>
                        </Link>
                    </div>
                    {/* END CATEGORIE BOX #12 */}
                </div>
                {/* End row */}
            </div>
            {/* End container */}
        </section>
    );
};

export default Demo3Categories2;
