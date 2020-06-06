# Specify the provider and access details
provider "aws" {
  version = "~> 2.15.0"

  shared_credentials_file = "$HOME/.my.aws/credentials"
  profile                 = "default"
  region                  = "us-west-2"
}

module "s3_mui_theme" {
  source         = "./modules/s3"
  bucket         = "mui-theme.com"
  acl            = "public-read"
  index_document = "index.html"
  error_document = "index.html"
}


