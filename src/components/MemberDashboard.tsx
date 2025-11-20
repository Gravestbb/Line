import { Bell, TrendingUp, Calendar, Award } from 'lucide-react';
import { Card } from './ui/card';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';

export function MemberDashboard() {
  return (
    <div className="p-4 space-y-4">
      {/* ヘッダー */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm">おはようございます</p>
          <h2 className="text-gray-900">山田 太郎さん</h2>
        </div>
        <div className="relative">
          <Bell className="size-6 text-gray-600" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            3
          </span>
        </div>
      </div>

      {/* 重要なお知らせ */}
      <Card className="bg-amber-50 border-amber-200 p-4">
        <div className="flex items-start gap-3">
          <div className="bg-amber-500 rounded-full p-2">
            <Bell className="size-4 text-white" />
          </div>
          <div className="flex-1">
            <p className="text-amber-900 mb-1">資格更新期限が近づいています</p>
            <p className="text-amber-700 text-sm">残り<strong>4ヶ月</strong> | あと<strong>8単位</strong>必要です</p>
          </div>
        </div>
      </Card>

      {/* 次にやること */}
      <Card className="p-4">
        <div className="flex items-center gap-2 mb-3">
          <TrendingUp className="size-5 text-green-600" />
          <h3 className="text-gray-900">次にやること</h3>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
            <div>
              <p className="text-gray-900">カテゴリーC単位取得</p>
              <p className="text-gray-600 text-sm">あと2単位必要です</p>
            </div>
            <Badge className="bg-green-600">優先</Badge>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
              <p className="text-gray-900">上級資格プログラム受講</p>
              <p className="text-gray-600 text-sm">申込期限: 2026年1月末</p>
            </div>
            <Badge variant="outline">推奨</Badge>
          </div>
        </div>
      </Card>

      {/* 資格進捗サマリー */}
      <Card className="p-4">
        <div className="flex items-center gap-2 mb-4">
          <Award className="size-5 text-blue-600" />
          <h3 className="text-gray-900">資格進捗</h3>
        </div>
        
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-700">基礎資格</span>
              <span className="text-green-600">取得済</span>
            </div>
            <Progress value={100} className="h-2" />
          </div>
          
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-700">中級資格</span>
              <span className="text-blue-600">75%</span>
            </div>
            <Progress value={75} className="h-2" />
            <p className="text-gray-600 text-sm mt-1">推定達成: 2026年3月</p>
          </div>
          
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-700">上級資格</span>
              <span className="text-gray-500">0%</span>
            </div>
            <Progress value={0} className="h-2" />
            <p className="text-gray-600 text-sm mt-1">中級資格取得後に開始可能</p>
          </div>
        </div>
      </Card>

      {/* おすすめイベント */}
      <Card className="p-4">
        <div className="flex items-center gap-2 mb-3">
          <Calendar className="size-5 text-purple-600" />
          <h3 className="text-gray-900">おすすめイベント</h3>
        </div>
        
        <div className="space-y-3">
          <div className="border rounded-lg p-3">
            <div className="flex justify-between items-start mb-2">
              <div>
                <p className="text-gray-900">中級スキルアップ研修</p>
                <p className="text-gray-600 text-sm">2026年1月15日 14:00-17:00</p>
              </div>
              <Badge className="bg-purple-600">C単位</Badge>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-gray-600 text-sm">取得単位: 3単位</p>
              <button className="px-4 py-1.5 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700">
                申込む
              </button>
            </div>
          </div>

          <div className="border rounded-lg p-3">
            <div className="flex justify-between items-start mb-2">
              <div>
                <p className="text-gray-900">実践ワークショップ</p>
                <p className="text-gray-600 text-sm">2026年1月22日 10:00-16:00</p>
              </div>
              <Badge className="bg-blue-600">A単位</Badge>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-gray-600 text-sm">取得単位: 5単位</p>
              <button className="px-4 py-1.5 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700">
                申込む
              </button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
