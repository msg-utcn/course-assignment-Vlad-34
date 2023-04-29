terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.59"
    }
  }

  backend "s3" {
    bucket = "utcn-course-terraform-backend-540736005575"
    key    = "projects/utcn-course/dev/terraform.tfstate"
    region = "us-east-1"
  }

  required_version = ">= 1.2.0"
}

provider "aws" {
  region = var.region
}
