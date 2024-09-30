export default function getNeighborhoodsList() {
	    this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

	    const self = this;
	    this.addNeighborhood = (newNeightborhood) => {
		            self.sanFranciscoNeighborhoods.push(newNeightborhood);
		            return this.sanFranciscoNeighborhoods;
		        };
}
