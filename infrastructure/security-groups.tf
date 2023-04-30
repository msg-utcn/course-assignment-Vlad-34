resource "aws_security_group" "api_backend_sg" {
  name        = "${var.project_tag}-api_backend_sg"
  vpc_id      = aws_vpc.main_vpc.id


  ingress {
    description = "Allow inbound SSH traffic"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
  }

  ingress {
    description     = "Allow inbound Internet traffic on TCP on port 3000"
    from_port       = 3000
    to_port         = 3000
    protocol        = "tcp"
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
  }

  egress {
    description     = "Allow outbound Internet traffic on any protocol on any port"
    from_port        = 0
    to_port          = 0
    protocol         = "-1"
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
  }

  tags = {
    Project = var.project_tag
  }
}
