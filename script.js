async function postData(url = 'https://s3.amazonaws.com/open-to-cors/assignment.json', data = { name: 'User 1' }) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      // Handle non-2xx status code errors
      const errorText = await response.text();
      throw new Error(`Request failed with status: ${response.status}. Error: ${errorText}`);
    }

    console.log("Success!");
  } catch (error) {
    console.error("Error:", error);
  }
}

// Example usage
postData()
  .then(() => console.log("Data sent!"))
  .catch(error => console.error("Error sending data:", error));
