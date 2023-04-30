resource "aws_vpc" "main_vpc" {
  cidr_block           = var.vpc_cidr
  enable_dns_support   = true
  enable_dns_hostnames = true
  instance_tenancy     = "default"

  tags = {
    Name    = "${var.project_tag}-vpc"
    Project = var.project_tag
  }
}

resource "aws_subnet" "public_subnet_01" {
  vpc_id            = aws_vpc.main_vpc.id
  cidr_block        = var.subnets_cidr_blocks[0]
  availability_zone = var.availability_zones[0]

  depends_on = [
    aws_vpc.main_vpc
  ]
  tags = {
    Name    = "${var.project_tag}-public-subnet-01"
    Project = var.project_tag
  }
}

resource "aws_subnet" "private_subnet_01" {
  vpc_id            = aws_vpc.main_vpc.id
  cidr_block        = var.subnets_cidr_blocks[1]
  availability_zone = var.availability_zones[0]

  depends_on = [
    aws_vpc.main_vpc
  ]
  tags = {
    Name    = "${var.project_tag}-private-subnet-01"
    Project = var.project_tag
  }
}

resource "aws_internet_gateway" "internet_gateway" {
  vpc_id = aws_vpc.main_vpc.id

  tags = {
    Name    = "${var.project_tag}-internet-gateway"
    Project = var.project_tag
  }
}

resource "aws_default_route_table" "public_subnet_route_table" {
  default_route_table_id = aws_vpc.main_vpc.default_route_table_id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.internet_gateway.id
  }

  tags = {
    Name    = "${var.project_tag}-public-route-table"
    Project = var.project_tag
  }
}

resource "aws_route_table_association" "public_subnet_01_route_association" {
  subnet_id      = aws_subnet.public_subnet_01.id
  route_table_id = aws_default_route_table.public_subnet_route_table.id
}
