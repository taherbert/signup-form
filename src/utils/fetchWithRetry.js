// This is a fairly basic retry function with an incremental backoff. Typically,
// I would use something like p-retry (https://www.npmjs.com/package/p-retry)
// instead, but included this simpler implementation to show the basic process
const fetchWithRetry = async (
  url,
  options = {},
  retries = 3,
  backoff = 300
) => {
  // Some error codes to retry on. Wouldn't normally retry on
  // all of these, but wanted to include extras to show the
  // retry happening on bad emails
  const retryCodes = [400, 408, 500, 502, 503, 504]
  // Perform a fetch as normal
  const result = await fetch(url, options)

  // Return if everything is good
  if (result.ok) {
    return result.json()
  }

  // If we'd like to retry and received a code that is valid for retrying,
  // execute this function again with the same parameters, but decrement
  // the number of retries and increase the backoff time for each request.
  // In this instance, each retry will take twice as long as the one previous.
  if (retries > 0 && retryCodes.includes(result.status)) {
    await setTimeout(async () => {
      return await fetchWithRetry(url, options, retries - 1, backoff * 2)
    }, backoff)
  } else {
    throw new Error(result)
  }
}

export default fetchWithRetry
