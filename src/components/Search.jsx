import React, { useState } from "react";
import ApolloClient from "apollo-client";
import { WebSocketLink } from "apollo-link-ws";
import { InMemoryCache } from "apollo-cache-inmemory";

const Search = (props) => {
	const [location, setLocation] = useState("");
	const [term, setTerm] = useState("");

	const client = new ApolloClient({
		link: new WebSocketLink({
			uri: "https://api.yelp.com/v3/graphql",
			options: {
				reconnect: true,
				connectionParams: {
					headers: {
						Authorization: "DDBsIFAcxOykMan3M23mvTXB7txBcSu84beTI-H6CH1BpoKImHELdByqbGTY81f6mtmAC-ByJaS-4q9XesFCHJfuIQkXpxPz4ZAODW_ZVCAL_CjfipeZEv0mmqAVYHYx",
					},
				},
			},
		}),
		cache: new InMemoryCache(),	
	});

	const [businesses, setBusinesses] = useQuery(`
		{
			search(
				term: {0},
				location: {1},
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
		}
	`.format());

	return (
		<div className="home">
			<div class="container">
				<div class="form-group">
					<label for="locationInput">Location to search in</label>
					<input type="text" class="form-control" id="locationInput" placeholder="Dallas, TX" />
				</div>
			</div>
		</div>
	);
}

export default Search;
