import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { arrayBuffer } from "stream/consumers";

{
  /*
    1. this takes a url pointing to the pdf file(pdfurl)
    2. fetches the pdf from the url
    3.converts the fetched data into a format that langchain's pdfloader may understand
    4. uses pdfloader to extrract text from pdf
    5. combines text from all pages and returns a single string
    */
}
export async function fetchAndExtractPdfText(pdfUrl: string) {
  //uses the browser's "fetch" API to make an HTTP request to pdfurl
  //returns a "Response" object wrapped in a promise.
  const response = await fetch(pdfUrl);

  //converts the response body to blob
  const blob = await response.blob();
  {
    /*What is a Blob?

A Blob (Binary Large Object) is a JavaScript object representing a chunk of raw binary data, like a file (in this case, the PDF).
Think of it as a container for binary data (e.g., images, PDFs, videos) that you can manipulate in the browser.
Here, response.blob() reads the PDF's binary data from the HTTP response and packages it as a Blob.
    */
  }

  //converts the blob to an ArrayBuffer
  const array = await blob.arrayBuffer();

  {
    /*Why convert back to a blob?
    Langchain's PDFLoader expects a blob(or a file like object)as input.
    The arrayBuffer was an intermediate step to get the raw data
     */
  }
  const loader = new PDFLoader(new Blob([array])); //initiates Langchain's PDFLoader with the blob containing the pdf data

  const docs = await loader.load();

  //combine all pages
  return docs.map((doc) => doc.pageContent).join("\n");
}

{
  /*
    why to blob->arrayBuffer->blob?
    1. The fetch API returns a Response object, which contains the PDF data as a ReadableStream.
    2. A Blob (Binary Large Object) is a high-level JavaScript object designed to represent file-like binary data (e.g., a PDF, image, or video).

    Why Convert Blob to ArrayBuffer?
    An ArrayBuffer is a low-level representation of raw binary data (just a sequence of bytes).
    While a Blob is a high-level container for binary data, it doesn’t provide direct access to the raw bytes

    Why Convert Back to Blob?
    LangChain’s PDFLoader is designed to accept a Blob (or a file-like object) as input in browser environments.
    */
}
