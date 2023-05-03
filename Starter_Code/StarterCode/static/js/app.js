






// function that populates the metadata

// function that builds graphs

// function that initializes the dashboard
function initialize()
{
    // access the dropdwown selector from the index.html file
    var select = d3.select("#selDataset");

    // use d3.json in order to get the data 
    d3.json("samples.json").then((data) => {
        let sampleNames = data.names; // made an array of just the names
        console.log(sampleNames);

        // use foreach in order to create options for each sample in the 
        // selector 
        sampleNames.forEach((sample => {
            select.append("option")
            .text(sample);
        }));
    });

}

// function that updates the dashboard
function optionChanged(item)
{
    // prints the item for now 
    console.log(item);
}

// call the initialize function
initialize();
