import { Formik, Field, Form } from 'formik';
import { useState } from 'react';
import SearchCard from './SearchCard';
import "./Search.css"

const Search = () => {

    const [values, setValues] = useState(null);

    return (
        <div className='search-page'>
            <div className='filter'>
                <h1>Select as per your requirements</h1>
                <Formik
                    initialValues={{
                        state: '',
                        city: '',
                        hospital: '',
                        schemes: '',
                        treatment: ''
                    }}
                    onSubmit={async (values) => {
                        // await new Promise((r) => setTimeout(r, 500));
                        // alert(JSON.stringify(values, null, 2));
                        setValues(values)
                    }}
                >
                    <Form>
                        <div className='form-element'>
                            <label htmlFor="state">State : </label>
                            <Field id="state" name="state" placeholder="Enter state.." />
                        </div>
                        <div className='form-element'>
                            <label htmlFor="city">City :  </label>
                            <Field id="city" name="city" placeholder="Enter city.." />
                        </div>
                        <div className='form-element'>
                            <label htmlFor="hospital">Hospital Name :  </label>
                            <Field id="hospital" name="hospital" placeholder="Enter hospital name.." />
                        </div>
                        <div className='form-element'>
                            <div id="schemes-group">Schemes</div>
                            <div  className="scheme" role="scheme" aria-labelledby="schemes-group">
                                <label>
                                    <Field type="checkbox" name="schemes" value="Aayush" />
                                    Aayush
                                </label>
                                <label>
                                    <Field type="checkbox" name="schemes" value="Navrang" />
                                    Navrang
                                </label>
                                <label>
                                    <Field type="checkbox" name="schemes" value="Swasth Seva" />
                                    Swasth Seva
                                </label>
                            </div>
                        </div>
                        <div className='form-element'>
                            <div id="treatments-group">Treatments</div>
                            <div className="treatment" role="treatment" aria-labelledby="schemes-group">
                                <label>
                                    <Field type="checkbox" name="treatments" value="Diabetes" />
                                    Diabetes
                                </label>
                                <label>
                                    <Field type="checkbox" name="treatments" value="Cholera" />
                                    Cholera
                                </label>
                                <label>
                                    <Field type="checkbox" name="treatments" value="Typhoid" />
                                    Typhoid
                                </label>
                            </div>
                        </div>
                        <button type="submit">Submit</button>
                    </Form>
                </Formik>
                {/* <h1>State : {values?.state}</h1>
            <h1>City : {values?.city}</h1>
            <h1>Schemes : {values?.schemes}</h1>
            <h1>Treatment : {values?.treatments}</h1> */}
            </div>
            <div className='hospital-cards'>
                <SearchCard />
                <SearchCard />
                <SearchCard />
                <SearchCard />
                <SearchCard />
                <SearchCard />
                <SearchCard />
                <SearchCard />
                <SearchCard />
            </div>
        </div >
    );

}

export default Search;