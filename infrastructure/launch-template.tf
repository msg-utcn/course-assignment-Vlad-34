resource "aws_launch_template" "online_shop_launch_template" {
  name            = "${var.project_tag}-launch-template"
  image_id        = data.aws_ami.instance-ami.id
  instance_type   = var.compute_instance_configuration.instance_type
  key_name        = aws_key_pair.instance_access_keys.key_name
  default_version = var.compute_instance_configuration.version

  iam_instance_profile {
    name = aws_iam_instance_profile.ec2_ecr_access_profile.name
  }

  network_interfaces {
    associate_public_ip_address = true
    delete_on_termination       = true
    security_groups             = [aws_security_group.api_backend_sg.id]
  }

  tag_specifications {
    resource_type = "instance"
    tags          = {
      Project = var.project_tag
    }
  }

  user_data = base64encode(templatefile("${path.module}/templates/ec2-data-instance.tpfl", {
    jwt_secret : var.instance_jwt_secret,
    ecr_api_image : var.ecr_repository_image,
    ecr_region : var.region,
    ecr_account_id : var.aws_account_id
  }))
}
