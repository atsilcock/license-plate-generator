"""Initial migration to create tables

Revision ID: 03b7838b8cfe
Revises: 0a24d4dba41d
Create Date: 2024-10-23 07:34:49.956383

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '03b7838b8cfe'
down_revision = '0a24d4dba41d'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('licenseInfo', schema=None) as batch_op:
        batch_op.add_column(sa.Column('driver_id', sa.Integer(), nullable=True))
        batch_op.create_foreign_key(batch_op.f('fk_licenseInfo_driver_id_drivers'), 'drivers', ['driver_id'], ['id'])

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('licenseInfo', schema=None) as batch_op:
        batch_op.drop_constraint(batch_op.f('fk_licenseInfo_driver_id_drivers'), type_='foreignkey')
        batch_op.drop_column('driver_id')

    # ### end Alembic commands ###