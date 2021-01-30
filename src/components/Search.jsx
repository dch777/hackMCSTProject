import React, { useState } from "react";
import axios from "axios";

const Search = (props) => {
	const [location, setLocation] = useState("");
	const [term, setTerm] = useState("");
	const [data, setData] = useState([]);

	const updateLocation = (event) => {
		setLocation(event.target.value);
	};

	const updateTerm = (event) => {
		setTerm(event.target.value);
	};

	const handleSubmit = (event) => {
		axios({
		url: 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/graphql',
		method: 'post',
		data: {
			query: `
			{
				search(
					term: "` + term + `",
					location: "` + location + `",
					limit: 10
				)
				{
					total
					business {
						name
						rating
						url
						photos
					}
				}
			}`
		},
		headers: {
			"Authorization": "Bearer DDBsIFAcxOykMan3M23mvTXB7txBcSu84beTI-H6CH1BpoKImHELdByqbGTY81f6mtmAC-ByJaS-4q9XesFCHJfuIQkXpxPz4ZAODW_ZVCAL_CjfipeZEv0mmqAVYHYx",
			"Accept-Language": "en-US",
		}
		}).then((result) => {
			setData(result.data.data.search.business);
		});
	}

	return (
		<div className="home">
			<br/>
			<div class="container">
				<div class="form-group">
					<label htmlFor="locationInput">Location to search in</label>
					<input type="text" class="form-control" id="locationInput" value={location} onChange={updateLocation} placeholder="Dallas, TX" />
				</div>
				<div class="form-group">
					<label htmlFor="termInput">Term to search for</label>
					<input type="text" class="form-control" id="termInput" value={term} onChange={updateTerm} placeholder="Taqueria" />
				</div>
				<button onClick={handleSubmit} class="btn btn-primary">
					Submit
				</button>
			</div>
			<br/>
			<div class="container">
				{ data.map((business) => (
					<div class="row">
						<div class="col-4">
							<img href={business.url} src={business.photos[0]} class="img-thumbnail" />
						</div>
						<div class="col-8">
							<h2>
								<a href={business.url}> {business.name} </a>
							</h2>
							<p> {business.rating} out of 5 </p>
							<hr class="my-4" />
						</div>
						<br/>
					</div>
				)) }
			</div>
		</div>
	);
};

export default Search;
