// S3 (via OAC) does exact key lookups only, so append the file Next.js exported.
function handler(event) {
  var request = event.request
  var uri = request.uri

  if (uri.endsWith('/')) {
    request.uri = uri + 'index.html'
  } else if (!uri.includes('.')) {
    request.uri = uri + '.html'
  }

  return request
}
