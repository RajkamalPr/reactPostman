const Mainbody=()=>{
    return(
        <>
            <div className="main">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6 col-12 pd">
                            <h2>TEMP</h2>
                            <span className="headerTxt">This is a test collection</span>
                            <div className="container">
                                <span className="txt">** Hello, world **</span><br/>
                                <span className="txt">[Model : Role]</span>
                            </div>
                            <div className="rol-container">
                                <h4>Model2 : Role</h4>
                            </div>
                            <div className="fl">
                                <span className="txt-pd">AUTHORIZATION</span><span className="txt-pd">Bearer Token</span>
                            </div>
                            <hr className="hidden"/>
                            <div className="fl">
                                <span className="txt-pd">Token</span><span className="txt-pd"> &lt;token&gt; </span>
                            </div>
                            <div className="contain">
                                <h2>Role</h2>
                                <span className="title-pd">[Model : Role]</span>
                                <div className="rol-container">
                                    <h4>Model2 : Role</h4>
                                </div>
                                <div className="fl">
                                    <span className="txt-pd">AUTHORIZATION</span><span className="txt-pd">Bearer Token</span>
                                </div>
                                <hr />
                                <div className="txt-para">This folder is using Bearer Token from collection  <span className="bg-red">TEMP</span></div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-12 bg-col"></div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6 col-12 col-h">
                            <div className="container-fld">
                                <h4><span className="bg-green2">GET</span> GET All Roles </h4>
                                <div className="editbox">http://localhost:8080/api/role</div>
                                <div className="fl">
                                    <span className="txt-pd">AUTHORIZATION</span><span className="txt-pd">Bearer Token</span>
                                </div>
                                <hr />
                                <div className="txt-para">This folder is using Bearer Token from collection  <span className="bg-red">TEMP</span></div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-12 highlighter">
                            <div class="txt-container">
                                <span>Example Request</span>
                                <span className="fl-end">GET All Roles</span>
                            </div>
                            <div className="title-code">
                                <span>curl --location --request GET <i className="bg-green">'http://localhost:8080/api/role'</i></span>
                            </div>
                            <div class="txt-container">
                                <span>Example Request</span>
                                <span className="fl-end">200 OK</span>
                            </div>
                            <div className="txt-container dummy-height">
                                <pre>
                                    
                                </pre>
                            </div>
                            <div class="txt-container">
                                <span></span>
                                <span className="fl-end"></span>
                            </div>
                        </div>
                    </div>
                </div>
                {/*This is for Get Roll By Id*/}
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6 col-12 col-h">
                            <div className="container-fld">
                                <h4><span className="bg-green2">GET</span>  GET Role by Id </h4>
                                <div className="editbox">http://localhost:8080/api/role/8</div>
                                <div className="fl">
                                    <span className="txt-pd">AUTHORIZATION</span><span className="txt-pd">Bearer Token</span>
                                </div>
                                <hr />
                                <div className="txt-para">This folder is using Bearer Token from collection  <span className="bg-red">TEMP</span></div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-12 highlighter">
                            <div class="txt-container">
                                <span>Example Request</span>
                                <span className="fl-end">GET Role by Id</span>
                            </div>
                            <div className="title-code">
                                <span>curl --location --request GET <i className="bg-green">'http://localhost:8080/api/role'</i></span>
                            </div>
                            <div class="txt-container">
                                <span>Example Request</span>
                                <span className="fl-end">200 OK</span>
                            </div>
                            <div className="txt-container dummy-height">
                                <p>
                                    &#123;<br/>
                                    <code>
                                        "id" &#58; 8, <br />
                                        "name" &#58; "s222uperadmin", <br/>
                                        "createdAt" &#58; "2021-02-10T09:51:26.000Z", <br/>
                                        "updatedAt" &#58; "2021-02-10T09:51:26.000Z",<br/>
                                    </code>
                                    &#125;
                                </p>
                            </div>
                            <div class="txt-container">
                                <span></span>
                                <span className="fl-end"></span>
                            </div>
                        </div>
                    </div>
                </div>
                {/*This is for Post Add for Role*/}
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6 col-12 col-h">
                            <div className="container-fld">
                                <h4><span className="bg-orange">POST</span>  POST Add a Role </h4>
                                <div className="editbox">http://localhost:8080/api/role</div>
                                <div className="fl">
                                    <span className="txt-pd">AUTHORIZATION</span><span className="txt-pd">Bearer Token</span>
                                </div>
                                <hr />
                                <div className="txt-para">This folder is using Bearer Token from collection  <span className="bg-red">TEMP</span></div>
                                <div className="txt-para pd-4"><b>Body</b> raw</div>
                                <hr/>
                                <div className="codeBlock">
                                    <span>
                                        &#123;<br/>
                                        "name": "superadmin"<br/>
                                        &#125;
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-12 highlighter">
                            <div class="txt-container">
                                <span>Example Request</span>
                                <span className="fl-end">POST Add a Role</span>
                            </div>
                            <div className="title-code">
                                <span>curl --location --request GET <i className="bg-green">'http://localhost:8080/api/role'</i>  \<br/>
                                --data-raw '&#123; <br/>
                                    "name" &#58; "superadmin" <br/>
                                    &#125;'
                                </span>

                            </div>
                            <div class="txt-container">
                                <span>Example Request</span>
                                <span className="fl-end">200 OK</span>
                            </div>
                            <div className="txt-container dummy-height">
                                <p>
                                    &#123;<br/>
                                    <code>
                                        "id" &#58; 7, <br />
                                        "name" &#58; "superadmin", <br/>
                                        "createdAt" &#58; "2021-02-10T09:50:36.727Z", <br/>
                                        "updatedAt" &#58; "2021-02-10T09:50:36.727Z",<br/>
                                    </code>
                                    &#125;
                                </p>
                            </div>
                            <div class="txt-container">
                                <span></span>
                                <span className="fl-end"></span>
                            </div>
                        </div>
                    </div>
                </div>
                {/*This is for Put Update Role*/}
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6 col-12 col-h">
                            <div className="container-fld">
                                <h4><span className="bg-blue">PUT</span>  POST Add a Role </h4>
                                <div className="editbox">http://localhost:8080/api/role/8</div>
                                <div className="fl">
                                    <span className="txt-pd">AUTHORIZATION</span><span className="txt-pd">Bearer Token</span>
                                </div>
                                <hr />
                                <div className="txt-para">This folder is using Bearer Token from collection  <span className="bg-red">TEMP</span></div>
                                <div className="txt-para pd-4"><b>Body</b> raw</div>
                                <hr/>
                                <div className="codeBlock">
                                    <span>
                                        &#123;<br/>
                                        "name": "superadmin"<br/>
                                        &#125;
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-12 highlighter">
                            <div class="txt-container">
                                <span>Example Request</span>
                                <span className="fl-end">PUT Update a Role</span>
                            </div>
                            <div className="title-code">
                                <span>curl --location --request GET <i className="bg-green">'http://localhost:8080/api/role/8'</i>  \<br/>
                                --data-raw '&#123; <br/>
                                    "name" &#58; "support" <br/>
                                    &#125;'
                                </span>

                            </div>
                            <div class="txt-container">
                                <span>Example Request</span>
                                <span className="fl-end">200 OK</span>
                            </div>
                            <div className="txt-container dummy-height">
                                <p>
                                    &#123;<br/>
                                    <code>
                                        "message" &#58; "Role was updated successfully.", <br />
                                    </code>
                                    &#125;
                                </p>
                            </div>
                            <div class="txt-container">
                                <span></span>
                                <span className="fl-end"></span>
                            </div>
                        </div>
                    </div>
                </div>
                {/*This is for Delete Update Role*/}
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6 col-12 col-h">
                            <div className="container-fld">
                                <h4><span className="bg-orange">Del</span>  DELETE One role </h4>
                                <div className="editbox">http://localhost:8080/api/role/7</div>
                                <div className="fl">
                                    <span className="txt-pd">AUTHORIZATION</span><span className="txt-pd">Bearer Token</span>
                                </div>
                                <hr />
                                <div className="txt-para">This folder is using Bearer Token from collection  <span className="bg-red">TEMP</span></div>
                                
                                
                            </div>
                        </div>
                        <div className="col-sm-6 col-12 highlighter">
                            <div class="txt-container">
                                <span>Example Request</span>
                                <span className="fl-end">DELETE one role</span>
                            </div>
                            <div className="title-code">
                                <span>curl --location --request GET <i className="bg-green">'http://localhost:8080/api/role/8'</i>  \<br/>
                                --data-raw ' '
                                </span>

                            </div>
                            <div class="txt-container">
                                <span>Example Request</span>
                                <span className="fl-end">200 OK</span>
                            </div>
                            <div className="txt-container dummy-height">
                                <p>
                                    &#123;<br/>
                                    <code>
                                        "message" &#58; "Role was updated successfully.", <br />
                                    </code>
                                    &#125;
                                </p>
                            </div>
                            <div class="txt-container">
                                <span></span>
                                <span className="fl-end"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
}
export default Mainbody;