import { AlertCircle, Calendar, CheckCircle, Clock } from 'lucide-react';
import { Card } from './ui/card';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';

export function RenewalManagement() {
  return (
    <div className="p-4 space-y-4">
      <div>
        <h2 className="text-gray-900 mb-1">資格更新管理</h2>
        <p className="text-gray-600 text-sm">3年ごとの更新手続きを管理します</p>
      </div>

      {/* 更新期限カウントダウン */}
      <Card className="p-4 bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200">
        <div className="flex items-start gap-3">
          <div className="bg-amber-500 rounded-full p-2">
            <Clock className="size-5 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-gray-900 mb-1">基礎資格の更新期限</h3>
            <div className="flex items-baseline gap-2 mb-2">
              <p className="text-amber-900 text-2xl">4ヶ月</p>
              <p className="text-amber-700 text-sm">2027年4月1日まで</p>
            </div>
            <Progress value={60} className="h-2 mb-2" />
            <p className="text-amber-800 text-sm">更新まで残り60%の期間があります</p>
          </div>
        </div>
      </Card>

      {/* 総合進捗度 */}
      <Card className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-gray-900">総合進捗度</h3>
          <span className="text-blue-600">78%</span>
        </div>
        <Progress value={78} className="h-3 mb-2" />
        <p className="text-gray-600 text-sm">あと8単位で更新要件を満たします</p>
      </Card>

      {/* カテゴリー別単位取得状況 */}
      <Card className="p-4">
        <h3 className="text-gray-900 mb-4">カテゴリー別単位取得状況</h3>
        
        <div className="space-y-4">
          {/* カテゴリーA */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Badge className="bg-blue-600">A</Badge>
                <span className="text-gray-700">基礎教育プログラム</span>
              </div>
              <span className="text-blue-600">15/15</span>
            </div>
            <Progress value={100} className="h-2 mb-1" />
            <div className="flex items-center gap-1 text-green-600 text-sm">
              <CheckCircle className="size-4" />
              <span>達成済</span>
            </div>
          </div>

          {/* カテゴリーB */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Badge className="bg-purple-600">B</Badge>
                <span className="text-gray-700">専門研修</span>
              </div>
              <span className="text-purple-600">8/10</span>
            </div>
            <Progress value={80} className="h-2 mb-1" />
            <p className="text-gray-600 text-sm">あと2単位必要です</p>
          </div>

          {/* カテゴリーC */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Badge className="bg-orange-600">C</Badge>
                <span className="text-gray-700">実践ワークショップ</span>
              </div>
              <span className="text-orange-600">3/5</span>
            </div>
            <Progress value={60} className="h-2 mb-1" />
            <p className="text-amber-600 text-sm">あと2単位必要です（優先）</p>
          </div>

          {/* 任意単位 */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Badge variant="outline">任意</Badge>
                <span className="text-gray-700">その他活動</span>
              </div>
              <span className="text-gray-600">10/10</span>
            </div>
            <Progress value={100} className="h-2 mb-1" />
            <div className="flex items-center gap-1 text-green-600 text-sm">
              <CheckCircle className="size-4" />
              <span>達成済</span>
            </div>
          </div>
        </div>
      </Card>

      {/* 未完了項目リスト */}
      <Card className="p-4">
        <div className="flex items-center gap-2 mb-3">
          <AlertCircle className="size-5 text-amber-600" />
          <h3 className="text-gray-900">未完了項目</h3>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-start gap-3 p-3 bg-amber-50 rounded-lg border border-amber-200">
            <Badge className="bg-orange-600 mt-0.5">C</Badge>
            <div className="flex-1">
              <p className="text-gray-900">カテゴリーC単位</p>
              <p className="text-gray-600 text-sm">あと2単位必要です</p>
              <p className="text-amber-700 text-sm mt-1">推奨期限: 2026年2月末</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border border-purple-200">
            <Badge className="bg-purple-600 mt-0.5">B</Badge>
            <div className="flex-1">
              <p className="text-gray-900">カテゴリーB単位</p>
              <p className="text-gray-600 text-sm">あと2単位必要です</p>
              <p className="text-purple-700 text-sm mt-1">推奨期限: 2026年3月末</p>
            </div>
          </div>
        </div>
      </Card>

      {/* 次回リマインド */}
      <Card className="p-4 bg-blue-50 border-blue-200">
        <div className="flex items-start gap-3">
          <Calendar className="size-5 text-blue-600 mt-0.5" />
          <div>
            <p className="text-blue-900 mb-1">次回リマインド</p>
            <p className="text-blue-700 text-sm">2026年2月1日に通知が届きます</p>
            <button className="text-blue-600 text-sm mt-2 underline">通知設定を変更</button>
          </div>
        </div>
      </Card>
    </div>
  );
}
