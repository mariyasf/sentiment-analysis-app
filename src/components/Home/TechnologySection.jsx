import React from "react";

const TechnologySection = () => {
  return (
    <section className="bg-gray-100 py-16" id="technology">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center md:flex-row md:items-start lg:mx-auto lg:max-w-screen-xl">
          <div className="mb-8 md:mb-0 md:mr-12 md:w-1/2">
            <h2 className="mb-6 text-3xl font-bold text-gray-800">
              Powered by Cutting-Edge NLP Technology
            </h2>
            <p className="mb-4 text-gray-600">
              Our sentiment analyzer leverages the{" "}
              <a
                href="https://www.npmjs.com/package/@xenova/transformers"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600 hover:underline"
              >
                @xenova/transformers
              </a>{" "}
              library, which implements a distilled version of Google's BERT
              model specifically optimized for browser-based execution. This
              allows for real-time sentiment analysis without compromising
              accuracy.
            </p>
            <p className="mb-4 text-gray-600">
              The model was pretrained on a diverse corpus of millions of text
              samples from books, websites, and other sources, then fine-tuned
              specifically for sentiment analysis tasks on the Stanford
              Sentiment Treebank (SST-2) dataset.
            </p>

            <div className="mb-6 rounded-lg bg-white p-4 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold text-gray-800">
                Why DistilBERT?
              </h3>
              <p className="mb-3 text-gray-600">
                We chose DistilBERT because it offers an optimal balance between
                accuracy and performance:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    <span className="font-medium">60% faster</span> than
                    standard BERT
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    <span className="font-medium">40% smaller</span> model size
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Retains{" "}
                    <span className="font-medium">97% of BERT's accuracy</span>
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg bg-white p-4 shadow-sm">
              <h3 className="mb-2 font-semibold text-gray-800">
                Technical Specifications:
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    <span className="font-medium">Model Architecture:</span>{" "}
                    DistilBERT (distilled version of BERT-base)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    <span className="font-medium">Precision:</span> 91.3%
                    accuracy on SST-2 benchmark
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    <span className="font-medium">Input Handling:</span>{" "}
                    Processes text up to 512 tokens (approx. 300-400 words)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    <span className="font-medium">Output:</span> Classifies as
                    POSITIVE/NEGATIVE with confidence score (0-1)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    <span className="font-medium">Inference Time:</span>{" "}
                    Typically under 500ms for average-length text
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="overflow-hidden rounded-xl bg-white shadow-lg">
              <div className="flex items-center bg-gray-800 p-4 text-white">
                <div className="flex space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <span className="ml-4 text-sm">sentiment-analysis.js</span>
              </div>
              <div className="p-6 font-mono text-sm">
                <p className="text-gray-500">
                  // Import the transformers pipeline
                </p>
                <p className="mb-4 text-gray-700">
                  <span className="text-purple-600">import</span>{" "}
                  {"{ pipeline }"} from
                  <span className="text-green-600">
                    {" "}
                    "@xenova/transformers"
                  </span>
                  ;
                </p>

                <p className="text-gray-500">
                  // Initialize the sentiment analysis pipeline
                </p>
                <p className="mb-4 text-gray-700">
                  <span className="text-purple-600">const</span> classifier =
                  await
                  <span className="text-blue-600"> pipeline</span>(
                  <span className="text-green-600">"sentiment-analysis"</span>,{" "}
                  {"{"}
                </p>
                <p className="mb-4 pl-4 text-gray-700">
                  <span className="text-blue-600">model</span>:{" "}
                  <span className="text-green-600">
                    "distilbert-base-uncased-finetuned-sst-2-english"
                  </span>
                  ,
                </p>
                <p className="mb-4 text-gray-700">{"}"});</p>

                <p className="text-gray-500">
                  // Analyze sample text sentiment
                </p>
                <p className="mb-4 text-gray-700">
                  <span className="text-purple-600">const</span> result = await
                  classifier(
                </p>
                <p className="mb-4 pl-4 text-gray-700">
                  <span className="text-green-600">
                    "This product exceeded all my expectations!"
                  </span>
                </p>
                <p className="mb-4 text-gray-700">);</p>

                <p className="text-gray-500">// Output the results</p>
                <p className="text-gray-700">
                  <span className="text-purple-600">console</span>.
                  <span className="text-blue-600">log</span>(result);
                </p>
                <div className="mt-4 rounded bg-gray-100 p-3 text-xs">
                  <p className="text-gray-500">// Expected output format:</p>
                  <p className="text-gray-700">
                    [{"{"} label:{" "}
                    <span className="text-green-600">"POSITIVE"</span>, score:{" "}
                    <span className="text-blue-600">0.9998</span> {"}"}]
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-lg bg-blue-50 p-4">
              <h4 className="mb-2 font-semibold text-blue-800">
                How It Processes Text:
              </h4>
              <ol className="ml-4 list-decimal space-y-2 text-sm text-gray-700">
                <li>Tokenizes input text into word pieces</li>
                <li>Adds special [CLS] and [SEP] tokens</li>
                <li>Creates attention masks</li>
                <li>Passes through 6 transformer layers</li>
                <li>Computes sentiment probabilities</li>
                <li>Returns label with confidence score</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
