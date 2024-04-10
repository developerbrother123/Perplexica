# 🚀 Perplexica - An AI-powered search engine 🔎

![preview](.assets/perplexica-screenshot.png)

## Overview

Perplexica is an open-source AI-powered searching tool or an AI-powered search engine that goes deep into the internet to find answers. Inspired by Perplexity AI, it's an open-source option that not just searches the web but understands your questions. It uses advanced machine learning algorithms like similarity searching and embeddings to refine results and provides clear answers with sources cited.

## Preview
![video-preview](.assets/perplexica-preview.gif)

## Features

- **Two Main Modes:**
  - **Copilot Mode:** (In development) Boosts search by generating different queries to find more relevant internet sources. Like normal search instead of just using the context by SearxNG, it visits the top matches and tries to find relevant sources to the user's query directly from the page.
  - **Normal Mode:** Processes your query and performs a web search.
- **Focus Modes:** (In development) special modes to better answer specific types of questions.
- **Current Information:** Some search tools might give you outdated info because they use data from crawling bots and convert them into embeddings and store them in a index (its like converting the web into embeddings which is quite expensive.). Unlike them, Perplexica uses SearxNG, a metasearch engine to get the results and rerank and get the most relevent source out of it, ensuring you always get the latest information without the overhead of daily data updates.

It has many more features like image and video search. Some of the planned features are mentioned in [upcoming features](#upcoming-features).

## Installation

There are mainly 2 ways of installing Perplexica - With Docker, Without Docker. Using Docker is highly recommended.

### Getting Started with Docker (Recommended)

1. Make sure Docker is installed and running on your system.
2. Install Yarn in order to create a yarn,lock file in the root directory
3. Clone the Perplexica repository:

```bash
git clone https://github.com/ItzCrazyKns/Perplexica.git
```

3. After cloning, rename the `.env.example` file to `.env` in the root directory. For Docker setups, you only need to fill these fields:

- `OPENAI_API_KEY`
- `SIMILARITY_MEASURE` (Its filled by default, you can leave it if you do not know about it.)

4. Install Yarn :
To install Yarn on Debian, you can follow these steps:

  i. Open your WSL2 Debian terminal.

  ii. Update your packages by running:
   ```
   sudo apt update
   ```

  iii. Install cURL if it's not already installed:
   ```
   sudo apt install curl
   ```

  iv. Configure the Yarn repository by running the following commands:
   ```
   curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
   echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
   ```

  v. Update your packages again to include the Yarn repository:
   ```
   sudo apt update
   ```

  vi. Install Yarn:
   ```
   sudo apt install yarn
   ```

  vii. Confirm the installation by checking the Yarn version:
   ```
   yarn --version
   ```

If Yarn is successfully installed, the command will return the installed version number.

viii. Make sure you have Yarn installed on your local machine. If you don't have it installed, you can install it by running the following command:[4]

   ```
   npm install -g yarn
   ```

ix. Navigate to the directory where your package.json file is located. This is typically the root directory of your project.

x. Run the following command to install the project dependencies and generate the yarn.lock file:

   ```
   yarn install
   ```

   This command will read the dependencies from your package.json file, install them, and generate the yarn.lock file in the same directory.

xi. After the yarn.lock file is generated, make sure it is located in the same directory as your Dockerfile.

xii. Now, you can build your Docker image again using the `docker compose up` command, and it should be able to find and copy the yarn.lock file.

By generating the yarn.lock file before building the Docker image, you ensure that the exact same versions of the dependencies are installed inside the Docker container, providing a consistent and reproducible environment.

5. Navigate to the directory containing `docker-compose.yaml` and execute:

```bash
docker compose up
```

5. Wait a few minutes for the setup to complete. Access Perplexica at `http://localhost:3001` in your web browser.

### Non-Docker Installation

For setups without Docker:

1. Follow the initial steps to clone the repository and rename the `.env.example` file to `.env` in the root directory. You will need to fill in all the fields in this file.
2. Additionally, rename the `.env.example` file to `.env` in the `ui` folder and complete all fields.
3. The non-Docker setup requires manual configuration of both the backend and frontend.

**Note**: Using Docker is recommended as it simplifies the setup process, especially for managing environment variables and dependencies.

## Upcoming Features

- Finalizing Copilot Mode
- Adding support for multiple local LLMs and LLM providers such as Anthropic, Google, etc.
- Adding Discover and History Saving features
- Introducing various Focus Modes
- Continuous bug fixing

## Contribution

Perplexica is built on the idea that AI and large language models should be easy for everyone to use. If you find bugs or have ideas, please share them in via GitHub Issues. Details on how to contribute will be shared soon.

## Acknowledgements

Inspired by Perplexity AI, Perplexica aims to provide a similar service but always up-to-date and fully open source, thanks to SearxNG.

If you have any queries you can reach me via my Discord - `itzcrazykns`. Thanks for checking out Perplexica.
