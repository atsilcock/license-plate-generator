"""adjusting column for Driver class

Revision ID: 4616c3f37cb8
Revises: 47aadc993e77
Create Date: 2024-10-23 11:16:20.797980

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '4616c3f37cb8'
down_revision = '47aadc993e77'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('driver_car', schema=None) as batch_op:
        batch_op.add_column(sa.Column('date_moved_to_state', sa.Date(), nullable=True))
        batch_op.add_column(sa.Column('age', sa.Integer(), nullable=False, server_default='25'))
        batch_op.add_column(sa.Column('weight', sa.Float(), nullable=False, server_default='70.0'))
        batch_op.add_column(sa.Column('height', sa.Float(), nullable=False, server_default='175.0'))

    with op.batch_alter_table('drivers', schema=None) as batch_op:
        batch_op.add_column(sa.Column('date_moved_to_state', sa.Date(), nullable=True))

    with op.batch_alter_table('states', schema=None) as batch_op:
        batch_op.drop_column('date_moved_to_state')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('states', schema=None) as batch_op:
        batch_op.add_column(sa.Column('date_moved_to_state', sa.DATE(), nullable=True))

    with op.batch_alter_table('drivers', schema=None) as batch_op:
        batch_op.drop_column('date_moved_to_state')

    with op.batch_alter_table('driver_car', schema=None) as batch_op:
        batch_op.drop_column('height')
        batch_op.drop_column('weight')
        batch_op.drop_column('age')

    # ### end Alembic commands ###
