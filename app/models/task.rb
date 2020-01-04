class Task < ApplicationRecord
    belongs_to :list
    validates :title, length: {minimum: 1}
end
