resource "aws_iam_policy" "access_ecr_iam_policy" {
  name        = "${var.project_tag}-access-ecr-policy"
  path        = "/"
  description = "Policy to provide permission to EC2 to access ECR"


  policy = jsonencode({
    Version   = "2012-10-17"
    Statement = [
      {
        Action = [
          "ecr-public:*",
          "ecr:*",
          "sts:GetServiceBearerToken",
        ]
        Effect   = "Allow"
        Resource = "*"
      },
    ]
  })
}
