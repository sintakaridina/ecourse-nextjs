import React from "react";

const Demo2About2 = () => {
    return (
        <section id="about-2" className="wide-60 about-section division">
            <div className="container">
                <div className="row d-flex align-items-center">
                    {/* ABOUT IMAGE */}
                    <div className="col-md-5 col-lg-6">
                        <div className="img-block pc-25 mb-40">
                            <img
                                className="img-fluid"
                                src="images/image-01.png"
                                alt="about-image"
                            />
                        </div>
                    </div>
                    {/* ABOUT TEXT */}
                    <div className="col-md-7 col-lg-6">
                        <div className="txt-block pc-25 mb-40">
                            {/* Title */}
                            <h3 className="h3-sm">
                                Transform your life through online education
                            </h3>
                            {/* Text */}
                            <p>
                                An enim nullam tempor sapien gravida donec porta
                                and blandit ipsum enim justo integer velna vitae
                                auctor integer congue magna and purus pretium
                                risus ligula rutrum luctus ultrice
                            </p>
                            {/* List */}
                            <ul className="txt-list mb-15">
                                <li>
                                    Nullam rutrum eget nunc varius etiam mollis
                                    risus undo
                                </li>
                                <li>
                                    Integer congue magna at pretium purus
                                    pretium ligula at rutrum risus luctus dolor
                                    auctor ipsum blandit purus
                                </li>
                                <li>
                                    Risus at congue etiam aliquam sapien egestas
                                    posuere
                                </li>
                                <li>
                                    At pretium purus integer congue magna
                                    pretium ligula at ipsum blandit purus rutrum
                                    risus luctus dolor auctor
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* END ABOUT TEXT */}
                </div>
                {/* End row */}
            </div>
            {/* End container */}
        </section>
    );
};

export default Demo2About2;
