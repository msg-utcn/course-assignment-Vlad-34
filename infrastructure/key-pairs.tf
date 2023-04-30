resource "aws_key_pair" "instance_access_keys" {
  key_name   = "${var.project_tag}-instance-access-keys"
  public_key = var.ssh_instance_public_key

  tags = {
    Project = var.project_tag
  }
}
