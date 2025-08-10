# Release Notes

## v1.0.0

Initial release of the Cloudflare Worker template.

### Features

- Basic Cloudflare Worker template
- Sample routes for testing
- GitHub Actions workflow for automated builds and releases
- Environment-specific configurations

### Usage

1. Clone the repository
2. Install dependencies with `npm install`
3. Configure your Cloudflare credentials
4. Deploy with `npm run deploy`

### Configuration

- Update `wrangler.toml` with your Cloudflare account details
- Modify `src/index.js` to implement your worker logic