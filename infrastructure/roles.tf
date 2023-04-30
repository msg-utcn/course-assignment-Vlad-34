resource "aws_iam_role" "ecr_access_iam_role" {
  name = "${var.project_tag}-ecr-access-iam-role"

  assume_role_policy = jsonencode({
    Version   = "2012-10-17"
    Statement = [
      {
        Action    = "sts:AssumeRole"
        Effect    = "Allow"
        Sid       = ""
        Principal = {
          Service = "ec2.amazonaws.com"
        }
      },
    ]
  })

  tags = {
    Project = var.project_tag
  }
}

resource "aws_iam_policy_attachment" "ecr_role_policy_attachment" {
  name       = "${var.project_tag}-ecr-role-policy-attachment"
  roles      = [aws_iam_role.ecr_access_iam_role.name]
  policy_arn = aws_iam_policy.access_ecr_iam_policy.arn
}

resource "aws_iam_instance_profile" "ec2_ecr_access_profile" {
  name = "${var.project_tag}-ec2-instance-profile"
  role = aws_iam_role.ecr_access_iam_role.name
}
