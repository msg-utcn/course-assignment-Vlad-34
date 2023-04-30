variable "region" {
  type    = string
  default = "us-east-1"
}

variable "vpc_cidr" {
  type    = string
  default = "20.0.0.0/16"
}

variable "availability_zones" {
  type    = list(string)
  default = ["us-east-1c"]
}

variable "subnets_cidr_blocks" {
  type    = list(string)
  default = ["20.0.1.0/24", "20.0.3.0/24"]
}

variable "project_tag" {
  type    = string
  default = "utcn-course"
}

variable "ssh_instance_public_key" {
  type = string
}

variable "ecr_repository_image" {
  type = string
}

variable "compute_instance_configuration" {
  type = object({
    instance_type = string
    version       = number
  })
}

variable "aws_account_id" {
  type = string
}

variable "instance_jwt_secret" {
  type = string
}
